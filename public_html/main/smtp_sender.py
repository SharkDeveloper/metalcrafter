from smtplib import SMTP
from dotenv import load_dotenv
import os

from email.message import EmailMessage


load_dotenv()

EMAIL_LOGIN = os.getenv("EMAIL_LOGIN")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = os.getenv("SMTP_PORT")


def send_mail(order_id=1, company: str, name: str, phone: str, email: str, description:str ) -> None:
  msg = EmailMessage()
  msg['Subject'] = f'Заказ №{order_id}'

  msg.set_content(company + "\n\n Имя заказчкика: " + name + "\n\n Номер телефона: " + phone + "\n\n email: " + email + "\n\n Описание проекта" + description)

  with SMTP(SMTP_HOST,int(SMTP_PORT)) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()
    smtp.login(EMAIL_LOGIN, EMAIL_PASSWORD)
    smtp.send_message(msg,EMAIL_LOGIN,EMAIL_LOGIN)
    print('Message sent')
  order_id+=1