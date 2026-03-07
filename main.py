from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Обслуживание статики и автоматическая выдача index.html на "/"
app.mount("/", StaticFiles(directory="templates", html=True), name="static")
app.route("/")(app.send_static_file("index.html"))