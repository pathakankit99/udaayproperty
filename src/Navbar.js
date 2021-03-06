import Image from 'next/image'
import logo from "../public/images/logo.png"
import Link from 'next/link'
import ProjectMenu from './ProjectMenu'
import {FaBars, FaFacebook, FaTwitter, FaEnvelope} from 'react-icons/fa'
import {useState, useEffect} from 'react'
function Navbar({active}) {
    const [count, setCount] = useState(1)
    const [open, setOpen] = useState(false)
    const sidemenu = { true: "translateX(0%)", false: "translateX(-100%)" };
    var style = {
      transform: sidemenu[open]
    };
    useEffect(() => {
        if(count%2==0)
        {
            setOpen(true)
        }
        else
        {
            setOpen(false)
        }
    }, [count])
    return (
        <>
        <nav className="w-full hidden lg:flex p-4 lg:px-16 justify-between items-center">
            <div className="logo">
                <Image width={40} height={70} src={logo}/>
            </div>
            <div className="flex justify-center">
                <ul className=" flex justify-evenly">
                    <li className={"nav-item "+(active==="home"?"text-blue-600 font-bold":"nav-item-hover")}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={"nav-item "+(active==="projects"?"text-blue-600 font-bold":"nav-item-hover")}>
                        <Link href="/projects">
                            <ProjectMenu/>
                        </Link>
                    </li>
                    <li className={"nav-item "+(active==="gallery"?"text-blue-600 font-bold":"nav-item-hover")}>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className={"nav-item "+(active==="aboutus"?"text-blue-600 font-bold":"nav-item-hover")}>
                        <Link href="/about-us">About Us</Link>
                    </li>
                </ul>
            </div>
            <div>
            <Link href="/contact" passHref>
                <div className="btn btn-blue flex justify- pointeronhover items-center">
                    <span className="transformIcon">
                    <FaEnvelope/> 
                    </span>
                    <span className="mx-2">                
                        Contact Us
                    </span> 
                    <span className="extraSpan"></span>
                </div>
                </Link>
            </div>
        </nav>
        <nav className="adminNavbar shadow-xl bg-white flex lg:hidden justify-between items-center p-4">
            <div className="text-4xl">
                <FaBars  onClick={()=>setCount(count+1)}/>
            </div>
            <div className="logo">
                <Image width={40} height={70} src={logo}/>
            </div>
        </nav>
        <div style={style} onClick={()=>setCount(count+1)} className="overlay">
        </div>
        <aside style={style} className="sidemenu text-sm bg-white text-black w-8/12 md:w-4/12 lg:w-2/12">
            <ul className="">
                <li className={"nav-item "+(active==="home"?"text-blue-600 font-bold bg-gray-200":"nav-item-hover")}>
                    <Link href="/">Home</Link>
                </li>
                <li className={"nav-item "+(active==="projects"?"text-blue-600 font-bold bg-gray-200":"")}>
                    <span className={""+(active==="projects"?"text-blue-600 font-bold bg-gray-200":"nav-item-hover")}>
                        <Link href="/projects">Projects</Link>
                    </span>
                    <ul className="pl-4 text-sm pt-2">
                        <li className="py-3 hover:underline">
                            <Link href="/utsav-residential">
                                Utsav Residential
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={"nav-item "+(active==="gallery"?"text-blue-600 font-bold bg-gray-200":"nav-item-hover")}>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li className={"nav-item "+(active==="aboutus"?"text-blue-600 font-bold bg-gray-200":"nav-item-hover")}>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className="p-4">
                    <div className="btn btn-blue flex w-10/12 items-center">
                        <FaEnvelope/> 
                        <span className="ml-2">                
                            <Link href="/contact">Contact Us</Link>
                        </span> 
                    </div>
                </li>
                <li className="p-4 flex">
                    <a className="pr-4" href="https://www.facebook.com/ennaarrealtors" target="_blank">
                        <span className="text-xl">
                            <FaFacebook/>
                        </span>
                    </a>
                    <a href="https://twitter.com/ENNAARREALTOR" target="_blank">
                        <span className="text-xl">
                            <FaTwitter/>
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
        </>
    );
}

export default Navbar;