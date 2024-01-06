"use client";
import { useState } from "react";
import PostForm from "@/components/PostForm";

const BlogCreatePage = () => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("content") || "";
    } else {
      return "";
    }
  });
  const post = {
    title: "",
    slug: "",
    content: value,
  };
  return (
    <div className="mt-2 flex flex-col items-center justify-center mb-10">
      <PostForm post={post} />
    </div>
  );
};

export default BlogCreatePage;
