// import React from "react";
import { notFound } from "next/navigation";
import getPost from "../../../../lib/getPost";

export default async function PostPage({ params }) {
  const { id } = await params;

  const post = await getPost(id);

  if (!post || !post.id) {
    return notFound();
  }

  console.log("Single Post ID : ", post);
  return (
    <div className="mt-6 container mx-auto">
      <h2 className="text-blue-500 text-xl font-semibold">{post?.title}</h2>
      <p className="mt-3">{post?.body}</p>
    </div>
  );
}
