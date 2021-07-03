import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
function Section3() {
    return (
        <section className="p-4 lg:px-16 flex flex-col items-center text-center">
            <h2 className="heading">Latest <span className="font-bold px-2 bg-blue-200 text-blue-800">Project</span></h2>
            <div className="flex flex-wrap text-left">
                <div className="w-full lg:w-6/12 order-1 lg:order-2">
                    <img className="w-full" src="/images/utsav.jpg"/>
                </div>
                <div className="w-full lg:w-6/12 order-2 lg:order-1">
                    <h3 className="heading2 py-1 ">Utsav Residential</h3>
                    <hr style={{height: "2px"}} className="w-full lg:w-4/12 bg-blue-500"/>
                    <p className="py-6">
                        Utsav Residential, is a proposed modern integrated township located at Medical More, near North Point residential boarding school, opposite SSB Camp, Ranidanga. 
                        Buzzing with development activities, the plots on offer in Utsav Residential are in various sizes of <b>115 to 1000 sq yard</b>, enabling you to build a house the way you desire.<br/>
                        <br/>
                        Utsav Residential, enjoys proximity to the NJP Railway Station, Bagdogra Airport, North Bengal Medical College, Neotia Nursig home and North Bengal University. 
                        It is at a stones throw distance from City Center Shopping Mall, making it a very attractive destination.
                    </p>
                    <span className="inline-block">
                    <Link href="/utsav-residential" passHref>
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
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Section3;