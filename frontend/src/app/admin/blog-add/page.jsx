import dynamic from "next/dynamic";

const MyEditor = dynamic(() => import("@/components/MyEditor"), {
  ssr: false,
});

const BlogAddPage = () => {
  return (
    <main className="min-h-full flex flex-col items-center p-24 ">
      <MyEditor />
    </main>
  );
};

export default BlogAddPage;
