import Link from "next/link"

function About(){


    return(<>
    <h1>about page</h1>
    <Link href="/about/1233" >
        about userID = 1233
    </Link>
    
    </>)
}

export default About