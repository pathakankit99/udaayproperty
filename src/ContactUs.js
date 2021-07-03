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
                <h1 className="heading py-4">Contact Us</h1>
               </div>
                <form>
                    <div className="mb-3 pt-0">
                        <label>Full Name <span>*</span></label>
                        <input type="text" placeholder="Full Name"/>
                    </div>
                    <div className="mb-3 pt-0">
                        <label>Email <span>*</span></label>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="mb-3 pt-0">
                        <label>Message <span>*</span></label>
                        <textarea rows={7} className="px-3 py-3 text-gray-700" placeholder="Message"></textarea>
                    </div>
                    <input type="submit" value="submit" className="pointeronhover btn text-blue-500 hover:bg-blue-800 hover:text-white"/>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;