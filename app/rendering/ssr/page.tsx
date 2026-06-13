import { getPosts } from './fetchPost';
import  Image from 'next/image'
export default async function SSRPage() {
  const posts = await getPosts();

  return (
    <>

    <Image
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseY3pl8yO1w1BXS4eMSjSk0VcDWiIDfh_7Q&s'}
      alt='image'
      width={5000}
      height={5000}
      loading="eager"
      className='w-[400px] h-[200px]'
    />
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
