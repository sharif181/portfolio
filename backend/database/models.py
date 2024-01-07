from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.sql.functions import func
from datetime import datetime

# from sqlalchemy.orm import relationship

from .db import Base


class TrackTimeMixin:
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=datetime.now)


class Post(Base, TrackTimeMixin):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True)
    slug = Column(String, unique=True)
    content = Column(String)
    content_type = Column(String)
    tags = Column(String, nullable=True)
    thumbnail = Column(String, nullable=True)

    # maybe need later
    # owner_id = Column(Integer, ForeignKey("users.id"))

    # owner = relationship("User", back_populates="items")
