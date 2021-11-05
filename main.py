from fastapi import FastAPI
from starlette.websockets import WebSocket
import socketio
import asyncio
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


sio = socketio.AsyncServer(async_mode="asgi", cors_allowed_origins="*")
app = socketio.ASGIApp(sio)

@sio.event
async def connect(sid, environ):
    await sio.emit("my message", {"hehe": "hoho"})

@sio.event
async def connect_error(sid, data):
    print("The connection failed!", data)

@sio.event
async def disconnect(sid):
    print("I'm disconnected!")


@sio.event
async def send_message(sid, data):
    print("movida")

