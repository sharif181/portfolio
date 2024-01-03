"use client";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { useState } from "react";

const MyEditor = () => {
  const [model, setModel] = useState(() => {
    return localStorage.getItem("saveData") || "";
  });

  const onSave = () => {
    console.log(model);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* show preview */}
      <dialog id="my_modal_1" className="h-screen w-screen overflow-y-auto">
        <div className="modal-action">
          <form method="dialog">
            <button className="rounded-lg bg-red-800 py-2 px-7 ml-2 mt-2">
              Close
            </button>
          </form>
        </div>
        <div className="pt-2 ml-2 mt-2">
          <div className="flex justify-center font-sans text-[30px] font-bold">
            Here is the preview...
          </div>
          <div className="mt-5">
            <FroalaEditorView model={model} />
          </div>
        </div>
      </dialog>

      <div className="flex flex-row gap-4">
        <div
          className="rounded-lg py-2 px-4 bg-green-800 cursor-pointer 
        hover:bg-green-950"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Preview
        </div>
        <div
          className="rounded-lg py-2 px-4 bg-green-800 cursor-pointer
         hover:bg-green-950"
          onClick={onSave}
        >
          Save
        </div>
      </div>
      <div className="w-auto m-[60px] overflow-y-auto ">
        <FroalaEditor
          model={model}
          onModelChange={(e) => setModel(e)}
          config={{
            placeholderText: "Start writing....",
            saveInterval: 2000,
            events: {
              "save.before": function (html) {
                localStorage.setItem("saveData", html);
              },
            },
          }}
          tag="textarea"
        />
      </div>
    </div>
  );
};

export default MyEditor;
