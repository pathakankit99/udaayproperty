import Lottie from "react-lottie"
import * as animationData from '../public/lottie/contact2.json'
function ContactUs() {
    const lottieOptions={
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section className="contactform pt-24 lg:p-0 flex flex-wrap justify-center bg-gray-100 item-center">
            <div className="w-full lg:w-6/12 overflow-hidden lg:h-full">
                <Lottie options={lottieOptions}
              />
            </div>
            <div className="w-full lg:w-6/12 p-4 h-full lg:flex lg:flex-col justify-evenly">
               <div>
                <h1 className="heading">Contact Us</h1>
               </div>
                <form className="mt-6">
                    <div className="mb-3 pt-0">
                        <label>Full Name <span>*</span></label>
                        <input className="mt-2" type="text" placeholder="Full Name"/>
                    </div>
                    <div className="mb-3 pt-0">
                        <label>Email <span>*</span></label>
                        <input className="mt-2" type="email" placeholder="Email"/>
                    </div>
                    <div className="mb-3 pt-0">
                        <label>Message <span>*</span></label>
                        <textarea  rows={7} className="px-3 mt-2 py-3 text-gray-700" placeholder="Message"></textarea>
                    </div>
                    <input type="submit" value="submit" className="pointeronhover btn bg-blue-200 text-blue-900 hover:bg-blue-800 hover:text-white shadow-xl"/>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;