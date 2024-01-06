"use client";
import { useState } from "react";
import { toolbars } from "@/lib/texteditor/toolbar";
import { plugins } from "@/lib/texteditor/plugin";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = () => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("content") || "";
    } else {
      return "";
    }
  });
  // const [text, setText] = useState("");

  const onSubmit = () => {
    console.log("data will be send ", value);
    setValue("");

    // console.log(text);
  };

  return (
    <div className="w-full p-6">
      <Editor
        value={value}
        // onInit={(evt, editor) => {
        //   setText(editor.getContent({ format: "text" }));
        // }}

        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          localStorage.setItem("content", newValue);
          // setText(editor.getContent({ format: "text" }));
        }}
        tinymceScriptSrc={"/tinymce/tinymce.min.js"}
        init={{
          height: 500,
          plugins: plugins,
          toolbar: toolbars,

          // need to prepare backend then will come back
          /* without images_upload_url set, Upload tab won't show up*/
          // images_upload_url: "postAcceptor.php",

          // /* we override default upload handler to simulate successful upload*/
          images_upload_handler: function (blobInfo, success, failure) {
            console.log(blobInfo);
            setTimeout(function () {
              /* no matter what you upload, we will turn it into TinyMCE logo :)*/
              success(
                "http://moxiecode.cachefly.net/tinymce/v9/images/logo.png"
              );
            }, 2000);
          },

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
        }}
      />
      <button
        className="bg-blue-900 py-2 px-4 rounded-lg drop-shadow-xl mt-2"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default RichTextEditor;
