'use client'

function TextCom({children}: any) {
    return(<>
        <h1 className="bg-blue-300 text-3xl" 
        onClick={()=>{
            console.log("this is for me")
            alert("heymaster")
        }}
        >
            {children}
        </h1>
    </>)
}
export default TextCom