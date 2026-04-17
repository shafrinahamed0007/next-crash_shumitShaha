// import React from "react";
import { notFound } from "next/navigation";
import getPost from "../../../../lib/getPost";
import getComments from "../../../../lib/getPostComment";
import Comments from "@/app/components/Comments";
import { Suspense } from "react";
import getAllPosts from "../../../../lib/getAllPosts";

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

  // const [post, comments] = await Promise.all([postPromise, commentPromise]);
  const post = await postPromise;

  if (!post || !post.id) {
    return notFound();
  }

  console.log("Single Post ID : ", post);
  return (
    <div className="mt-6 container mx-auto">
      <h2 className="text-blue-500 text-xl font-semibold">{post?.title}</h2>
      <p className="mt-3">{post?.body}</p>
      <hr />
      <Suspense fallback="<h1>Loading Comments...</h1>">
        {" "}
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams(){
  const posts = await getAllPosts();

  return posts.map(post => ({
    id: post.id.toString(),

  }));
}
