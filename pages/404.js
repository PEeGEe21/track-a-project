import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import styles from '../styles/404.module.css'
// import styles from '../styles/Error.module.css';

const NotFound = () => {
    const router = useRouter() 

    // useEffect(() => {
    //     setTimeout(()=>{



    //         router.push("/");
    //         // router.go(-1); //To back one place
    //         // router.go(+1); //To go forward one place
    //     }, 3000)
    // }, [])

    return ( 
        <div className="kt-error-v3" style={{background: 'url(/images/bg4.jpg) '}}>
                <div className="kt-error_container">
					<span className="kt-error_number">
						<h1 className="">4<span className="rotate-animation">0</span>4</h1>
					</span>
					<p className="kt-error_title kt-font-light">
						How did you get here?
					</p>
					<p className="kt-error_subtitle">
						Sorry we can't seem to find the page you're looking for.
					</p>
					<p className="kt-error_description">
						There may be amisspelling in the URL entered,<br/>
						or the page you are looking for may no longer exist.
                        {/* <Link href="/">
                            <a>Go back to Home</a>
                        </Link> */}
					</p>
                    
				</div>
            
        </div>
     );
}
 
export default NotFound;