"use client";
import { useState } from "react";
import { toolbars } from "@/lib/texteditor/toolbar";
import { plugins } from "@/lib/texteditor/plugin";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RichTextEditor = ({ name, control, label, defaultvalue = "" }) => {
  const [value, setValue] = useState(defaultvalue);

  const handleImageUpload = (blobInfo, progress, failure) => {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData();
      formData.append("file", blobInfo.blob());
      try {
        const response = await fetch("/api/blog", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const res = await response.json();
          resolve("http://localhost:3000/" + res.location);
        } else {
          reject("Can upload image");
        }
      } catch (error) {
        reject("Error uploading file:", error);
      }
    });
  };

  return (
    <div className="w-full p-6">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field }) => (
          <Editor
            value={value}
            initialValue={defaultvalue}
            onEditorChange={(newValue, editor) => {
              setValue(newValue);
              localStorage.setItem("content", newValue);
              field.onChange(newValue);
            }}
            tinymceScriptSrc={"/tinymce/tinymce.min.js"}
            init={{
              height: 500,
              plugins: plugins,
              toolbar: toolbars,
              // defined programming languages
              codesample_languages: [
                { text: "HTML/XML", value: "markup" },
                { text: "JavaScript", value: "javascript" },
                { text: "CSS", value: "css" },
                { text: "PHP", value: "php" },
                { text: "Ruby", value: "ruby" },
                { text: "Python", value: "python" },
                { text: "Java", value: "java" },
                { text: "C", value: "c" },
                { text: "C#", value: "csharp" },
                { text: "C++", value: "cpp" },
              ],
              content_style: `
              body {
                font-family: 'Roboto', sans-serif;
                color: #222;
              }
              img {
                height: auto;
                margin: auto;
                padding: 10px;
                display: block;
              }
              img.medium {
                max-width: 25%;
              }
              a {
                color: #116B59;
              }
              .related-content {
                padding: 0 10px;
                margin: 0 0 15px 15px;
                background: #eee;
                width: 200px;
                float: right;
              }
            `,
              images_upload_url: "http://localhost:3000/api/blog",
              automatic_uploads: true,
              images_reuse_filename: true,
              images_upload_handler: handleImageUpload,
              imagetools_toolbar:
                "rotateleft rotateright | flipv fliph | editimage imageoptions",
            }}
          />
        )}
      />
    </div>
  );
};

export default RichTextEditor;
