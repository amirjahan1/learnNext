import Link from "next/link";

interface PageProps {
    params: {userId: string};
    searchParams?: any
}
async function UserIdPage({params}:PageProps){
     const { userId } = await params
       console.log(params)
    return(<>
    <h1>User  ID number {userId}</h1>
     <Link href={`/about/${userId}/ali`}>
     hi ali
     </Link>
    
    </>)
}

export default UserIdPage