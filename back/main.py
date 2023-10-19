from fastapi import FastAPI
from models import User, engine
from fastapi.middleware.cors import CORSMiddleware

app= FastAPI()


origins =[
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

# create user
user = User(name='Pepito Perez', skills="java: 7, python: 8, react: 6,communication:7,teamwork:7", position='Software Engineer')



@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/users")
def users():
    return user