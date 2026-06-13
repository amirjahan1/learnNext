async function getPosts() {
      const res  = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate:60
        }
      })

    return res.json()
    
}

export default async function ISRPage() {
    const posts =  await getPosts();
    
    return  (<>
        <h1>ISR - Incremental Static Regenration</h1>
            <ul>


            {posts.slice(0,50).map((post :any)=>(
            <li className="my-5 border-b-2 border-b cursor-pointer" key={post.id}>
                {post.title}
            </li>
            ))}
            

        </ul>
    </>)
}