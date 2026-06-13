'use client'
import { usePathname,useRouter } from 'next/navigation'
function TextCom({children}: any) {
    const pathname = usePathname()
    const router = useRouter()
    return(<>
        <h1 className={` text-3xl ${pathname === '/about/[userId]/ali' ? "bg-blue-300" : "bg-green-300"} `}
        onClick={()=>{
            console.log(pathname)
             router.push("/about/")
            //  router.back("/about/")
            // router.forward()
            // router.replace()

        }}
        >
            {children}
        </h1>
    </>)
}


export default TextCom