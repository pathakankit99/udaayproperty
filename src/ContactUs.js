function ContactUs() {
    return (
        <section className="contactform pt-24 lg:p-0 flex flex-wrap justify-center bg-blue-500 text-white item-center">
            <div className="w-full lg:w-6/12 overflow-hidden lg:h-full">
                <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"/>
            </div>
            <div className="w-full lg:w-6/12 p-4 h-full lg:flex lg:flex-col justify-evenly">
               <h1 className="heading py-4">Contact Us</h1>
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