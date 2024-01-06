"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import RichTextEditor from "./RichTextEditor";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        image: post?.image || null,
        type: post?.type || undefined,
      },
    });

  const submit = async (data) => {
    console.log(data);
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
  }, []);

  React.useEffect(() => {
    watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center"
    >
      <div className="px-2 mb-4 w-[880px]">
        <label
          className="block text-gray-300 text-sm font-bold"
          htmlFor="title"
        >
          Title
        </label>
        <input
          label="title"
          placeholder="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("title", { required: true })}
        />
      </div>
      <div className="px-2 mb-4 w-[880px]">
        <label className="block text-gray-300 text-sm font-bold" htmlFor="slug">
          Slug
        </label>
        <input
          label="slug"
          placeholder="slug"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
      </div>
      <div className="">
        <label
          className="block text-gray-300 text-sm font-bold px-2 mb-4 "
          htmlFor="type"
        >
          Content Type
        </label>
        <select
          {...register("type")}
          className="px-2 mb-4 text-black w-[870px] shadow appearance-none border rounded"
        >
          <option value="project">Project</option>
          <option value="blog">Blog</option>
        </select>
      </div>
      <div className="px-2 mb-4 w-[880px]">
        <label className="block text-gray-300 text-sm font-bold" htmlFor="slug">
          Thumbnail
        </label>
        <input
          label="Thumbnail"
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          className="mb-4"
          {...register("image", { required: post })}
        />
        {post?.image ||
          (getValues("image") && (
            <div className="w-full mb-4">img will here</div>
          ))}
      </div>
      <div className="px-2 mb-4 w-[930px]">
        <RichTextEditor
          label="Content"
          name="content"
          control={control}
          defaultvalue={getValues("content")}
        />
      </div>

      <div>
        <button
          type="submit"
          className={
            "py-2 px-6 rounded-lg drop-shadow-2xl " +
            (post ? "bg-green-900" : "bg-blue-900")
          }
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PostForm;
