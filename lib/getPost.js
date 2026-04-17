export default async function getPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!result) {
    return notFound();
  }

  return result.json();
}
