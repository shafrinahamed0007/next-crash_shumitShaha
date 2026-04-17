// import React from "react";
import { notFound } from "next/navigation";
import getPost from "../../../../lib/getPost";
import getComments from "../../../../lib/getPostComment";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;

  const postPromise = await getPost(id);
  const commentPromise = await getComments(id);

  const [post, comments] = await Promise.all([postPromise, commentPromise]);

  if (!post || !post.id) {
    return notFound();
  }

  console.log("Single Post ID : ", post);
  return (
    <div className="mt-6 container mx-auto">
      <h2 className="text-blue-500 text-xl font-semibold">{post?.title}</h2>
      <p className="mt-3">{post?.body}</p>
      <hr />
      <div className="mt-10">
        <h2>Comments</h2>
        <ul>
          {
            comments.map(comment => <li className="mb-2" key={comment.id}>{comment?.body}</li>)
          }
        </ul>
      </div>
    </div>
  );
}
