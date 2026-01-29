from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Подключение статических файлов
app.mount("/static", StaticFiles(directory="design1"), name="static")

@app.get("/")
async def read_root():
    return {"message": "Сервис запущен. Статические файлы доступны по адресу /static"}

