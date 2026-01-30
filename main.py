from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import os

app = FastAPI()

# Подключение статических файлов
app.mount("/", StaticFiles(directory="design1"), name="static")

#@app.get("/")
#async def read_root():
#    return HTMLResponse(open("design1/index.html").read())

