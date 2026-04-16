import Link from "next/link";
import React from "react";

const Blogpage = () => {
  const blogs = [
    {
      id:1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id:2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
  ];
  return (
    <main>
      <h2 className="text-2xl text-green-500 font-semibold">
        This is Blogs Page
      </h2>
      <ul className="my-10">
        {blogs.map(blog => (
          <li className="mt-4" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogpage;
