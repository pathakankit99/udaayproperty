import {MdLocationOn} from "react-icons/md"
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa"
function ProjectCard({img, location, heading, url}) {
    return (
        <div style={{width:"400px"}} className="card bg-gray-100 shadow-xl m-6">
            <div className="w-full">
                <img src={img}/>
            </div>
            <div className="w-full p-4">
                <h4 className="font-bold capitalize text-2xl py-2">{heading}</h4>
                <p className="flex items-center capitalize text-blue-500">
                    <MdLocationOn/>
                    {location}
                </p>
                <div className="text-xs flex items-center justify-end">
                    <Link href={""+url}>View More</Link>
                    <span className="pl-2">
                        <FaChevronRight/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;