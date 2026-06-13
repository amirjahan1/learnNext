export async function generateStaticParams() {
    const posts  = await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>  res.json())

    return posts.map((post:any)=> ({
        slug: post.id.toString()
    }))
    
}


export default async function BlogPost(params:any) {
    const post  = await  fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`).then(res=>res.json())

    return(<>

        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    </>)
    
}