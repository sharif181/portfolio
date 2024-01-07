from typing import List, Union
from enum import Enum
from pydantic import BaseModel


class ContentType(str, Enum):
    PROJECT = "project"
    BLOG = "blog"


class PostBase(BaseModel):
    title: str
    content: str
    slug: str
    content_type: ContentType
    tags: Union[str, None] = None
    thumbnail: Union[str, None] = None


class PostCreate(PostBase):
    pass


class Post(PostBase):
    id: int

    # owner_id: int

    class Config:
        from_attributes = True
