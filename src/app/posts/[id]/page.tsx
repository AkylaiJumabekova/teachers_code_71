import { fetchPost } from '@/api/posts';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return (
    <main className={'container'}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <article>{post.author}</article>
    </main>
  );
}
