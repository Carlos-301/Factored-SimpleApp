from fastapi import FastAPI
from models import User, engine
from fastapi.middleware.cors import CORSMiddleware


origins =[
    "http://localhost:8000",
]
# create user
user = User(name='Pepito Perez', skills="java: 7, python: 8, react: 6,communication:7,teamwork:7", position='Software Engineer')

app= FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/users")
def users():
    user2 = user
    user2.skills = {skill.split(':')[0]: int(skill.split(':')[1]) for skill in user.skills.split(',')}
    return user2