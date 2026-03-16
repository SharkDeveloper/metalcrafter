from smtplib import SMTP
from dotenv import load_dotenv
import os

from email.message import EmailMessage


load_dotenv()

EMAIL_LOGIN = os.getenv("EMAIL_LOGIN")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = os.getenv("SMTP_PORT")


def send_mail(order_id: int=1, company: str=None, name: str=None, phone: str=None, email: str=None, description:str=None ) -> None:
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
    with SMTP(SMTP_HOST, int(SMTP_PORT)) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()
        smtp.login(EMAIL_LOGIN, EMAIL_PASSWORD)
        smtp.send_message(msg)
        print('Message sent')
    return True
  except Exception as e:
    print("Ошибка: ", e)