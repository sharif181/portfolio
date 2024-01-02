const BlogDetails = ({ params }) => {
  return (
    <div className="container mt-2">
      <div className="w-screen flex justify-center">
        <h1 className="font-[20px] text-[20px] py-2 px-8 rounded-md drop-shadow-lg bg-slate-700">
          {params.id}
        </h1>
      </div>

      <div className="mx-20 mt-2 py-2 min-w-max bg-slate-950 rounded-xl drop-shadow-xl shadow-amber-950">
        <div className="px-2">adasd</div>
      </div>
    </div>
  );
};

export default BlogDetails;
