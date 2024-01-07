from sqlalchemy.orm import Session

from . import models, schemas


def get_post(db: Session, slug: str):
    return db.query(models.Post).filter(models.Post.slug == slug).first()


def get_posts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Post).offset(skip).limit(limit).all()


def create_post(db: Session, post: schemas.PostCreate):
    db_post = models.Post(**post.model_dump())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post
