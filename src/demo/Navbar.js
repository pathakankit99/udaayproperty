import logo from "../../public/images/logo2.png"
import Lottie from "react-lottie"
import Image from "next/image"
import React,{useState, useEffect} from "react"
import * as animationData from '../../public/lottie/menu.json'
function Navbar() {
    const [isStopped, setIsStopped] = useState(false)
    const [count, setCount] = useState(1)
    const [open, setOpen] = useState(false)
    const [direction, setDirection] = useState(1)
    const sidemenu = { true: "translateX(0%)", false: "translateX(-100%)" };
    var style = {
      transform: sidemenu[open],
      minHeight: "100vh"
    };
    const lottieOptions={
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        if(count%2==0)
        {
            setOpen(true)
            setDirection(1)
        }
        else
        {
            setOpen(false)
            setDirection(-1)
        }
    }, [count])
    return (
        <nav style={{height: "100px"}} className="demoNav fixed right-0 left-0 top-0 flex items-center justify-end">
            <div style={{width: "100px", height: "100px"}} className="fixed left-0 z-50 p-4 bg-indigo-900" 
            onClick={()=>{
                setCount(count+1)
            }}>
                <Lottie
                options={lottieOptions}
                direction={direction}
                speed={2}
                />
            </div>
            <div style={{height:"100%"}} className="bg-white flex items-center">
                <div className="px-4">
                    <Image width={50} height={50} src={logo}/>
                </div>
                <div className="px-4">
                    <span className="text-2xl text-gray-800 font-bold">Udaan<br/></span>
                    <span className="text-xl text-indigo-700 font-bold">Properties</span>
                </div>
            </div>
            <div style={style} className="fixed flex justify-center items-center menu z-10 bg-indigo-700 text-white top-0 bottom-0 right-0 left-0">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Projects</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;