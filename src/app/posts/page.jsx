import { notFound } from "next/navigation";
import getAllPosts from "../../../lib/getAllPosts";
import Link from "next/link";

const PostsPage = async () => {
  const posts = await getAllPosts();
  if (!posts) {
    notFound();
  }
  console.log("All Posts: ", posts);
  return (
    <div className="container mx-auto text-center mt-6">
      <h1 className="text-2xl font-semibold text-blue-500">
        All Posts: {posts.length}
      </h1>

      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
