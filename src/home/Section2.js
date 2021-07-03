import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
function Section2() {
    return (
        <section className="p-4 lg:px-16 text-center flex flex-col justify-center items-center">
           <h1 className="heading">Welcome to Udaan Properties</h1>
           <p className="para w-full lg:w-8/12">
            Udaan Properties have earned the badge as the prominent realtor in 
            North Bengal, providing tailored real estate solutions for your dream home 
            or the right office environment for your business.
             Finding the perfect space that fits your expectations can be a daunting task 
             unless you have the ideal partner by your side. 
             We connect you to the right place in primal locations that 
             will be your home for years to come, holding memories in the walls 
             and spreading joy to the residents.
           </p>
           <Link href="/about-us" passHref>
                <div className="btn btn-outline-blue flex justify-center pointeronhover items-center">
                    <span className="transformIcon">
                        <FaArrowRight/>
                    </span>
                    <span className="mx-2">                
                        Know More
                    </span> 
                    <span className="extraSpan"></span>
                </div>
            </Link>
        </section>
    );
}

export default Section2;