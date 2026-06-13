import { getPosts } from './fetchPost'



export default async function SSRPage(){

    const posts = await getPosts()

    return(<>
        <h1 className="text-3xl">SSR - Server side rendering</h1>
        <ul>


            {posts.slice(0,50).map((post :any)=>(
            <li className="my-5 border-b-2 border-b cursor-pointer" key={post.id}>
                {post.title}
            </li>
            ))}
            

        </ul>

        <p  className="text-3xl  bg-red-400">  this page  generate in every request</p>
    </>)
}