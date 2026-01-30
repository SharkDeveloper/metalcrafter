from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Обслуживание статики и автоматическая выдача index.html на "/"
app.mount("/", StaticFiles(directory="design1", html=True), name="static")

