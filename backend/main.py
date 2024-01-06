from fastapi import FastAPI, File, UploadFile
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/upload-image/")
async def create_upload_file(uploaded_file: UploadFile = File(...)):
    print("in upload file")
    print(uploaded_file)
    file_location = f"images/{uploaded_file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(uploaded_file.file.read())

    # { location: '/uploaded/image/path/image.png' }
    return {"location": file_location}
    # return {"info": f"file '{uploaded_file.filename}' saved at '{file_location}'"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
