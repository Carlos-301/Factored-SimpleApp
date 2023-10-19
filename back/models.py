from sqlalchemy import  Column, Integer, String
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# create engine
engine = create_engine('sqlite+pysqlite:///:memory:', echo=True)

Base = declarative_base()

Base.metadata.create_all(engine)


# create session
Session = sessionmaker( autocommit=False, autoflush=False,bind=engine)
session = Session()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    skills = Column(String)
    position = Column(String)