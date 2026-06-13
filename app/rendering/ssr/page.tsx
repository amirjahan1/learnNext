import { getPosts } from './fetchPost';

export default async function SSRPage() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-3xl">SSR - Server side rendering</h1>
      <ul>
        {posts.slice(0, 50).map((post: any) => (
          <li className="my-5 cursor-pointer border-b border-b-2" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>

      <p className="bg-red-400 text-3xl"> this page generate in every request</p>
    </>
  );
}
