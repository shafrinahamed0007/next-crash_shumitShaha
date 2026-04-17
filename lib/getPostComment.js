export default async function getComments(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

  if (!result) {
    return notFound();
  }

  return result.json();
}
