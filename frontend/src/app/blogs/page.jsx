import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  return (
    <div className="py-2">
      <div className="flex justify-center">
        <h1 className="font-serif text-[20px] font-[20px] rounded-md bg-slate-600 px-6 py-1 m-2">
          Blogs
        </h1>
      </div>

      <div className="gap-20 mx-20 mt-6 rounded-md bg-drop-shadow-lg grid grid-cols-3 bg-slate-800">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
