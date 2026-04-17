// import React from "react";

import { notFound } from "next/navigation";

const SingleBlog = async ({ params }) => {
  const { blogId } = await params;

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 description",
    },
  ];

  const blogExist = blogs.find((blog) => blog.id === parseInt(blogId));

  if (!blogExist) {
    notFound();
  }

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-blue-500">
        This blog ID is {blogId}
      </h2>
    </div>
  );
};

export default SingleBlog;
