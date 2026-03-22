from smtplib import SMTP
from email.message import EmailMessage
import logging
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
log_dir = BASE_DIR / 'logs'
log_dir.mkdir(exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler(log_dir / 'email.log', encoding='utf-8'),
    ]
)
logger = logging.getLogger(__name__)

# Загружаем секреты из файла вне public_html
def load_env(path):
    env = {}
    try:
        with open(path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    env[key.strip()] = value.strip()
    except FileNotFoundError:
        logger.error(f"Файл секретов не найден: {path}")
    return env

#Файл ~/.env_metalcraft лежит выше public_html — из браузера к нему не добраться, в git он не попадёт, пароли не светятся в коде.
secrets = load_env(Path.home() / '.env') 

EMAIL_LOGIN = secrets.get('EMAIL_LOGIN')
EMAIL_PASSWORD = secrets.get('EMAIL_PASSWORD')
SMTP_HOST = secrets.get('SMTP_HOST')
SMTP_PORT = int(secrets.get('SMTP_PORT', 587))

def send_mail(company: str, name: str, phone: str, email: str, description: str, order_id: int = 1) -> bool:
    if not all([EMAIL_LOGIN, EMAIL_PASSWORD, SMTP_HOST]):
        logger.error("Не заданы переменные окружения для SMTP")
        return False
    try:
        msg = EmailMessage()
        msg['Subject'] = f'Заказ №{order_id}'
        msg['From'] = EMAIL_LOGIN
        msg['To'] = EMAIL_LOGIN
        msg.set_content(
            f"Компания: {company}\n\n"
            f"Имя заказчика: {name}\n\n"
            f"Номер телефона: {phone}\n\n"
            f"Email: {email}\n\n"
            f"Описание проекта: {description}"
        )
        with SMTP(SMTP_HOST, SMTP_PORT) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()
            smtp.login(EMAIL_LOGIN, EMAIL_PASSWORD)
            smtp.send_message(msg)
            logger.info(f"Письмо отправлено | Компания: {company} | Имя: {name} | Телефон: {phone}")
            order_id += 1
            return True

    except Exception as e:
        logger.error(f"Ошибка отправки | Компания: {company} | Имя: {name} | {type(e).__name__}: {e}")
        logger.exception(e)
        return False