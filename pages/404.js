import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter() 

    useEffect(() => {
        setTimeout(()=>{



            router.push("/");
            // router.go(-1); //To back one place
            // router.go(+1); //To go forward one place
        }, 3000)
    }, [])

    return ( 
        <div>
            <h1>Oooppsss...</h1>
            <h2>This page doesnt exist</h2>
            <Link href="/">
                <a>Go Back HOme</a>
            </Link>
            
        </div>
     );
}
 
export default NotFound;