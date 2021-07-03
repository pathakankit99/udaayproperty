function Section1() {
    return (
        <section className="pt-32 lg:pt-0 p-4 lg:px-16 flex flex-wrap justify-center items-center">
            <div className="w-full order-2 lg:order-1 lg:w-6/12">
                <h1 className="heading">About Udaan Property</h1>
                <hr style={{height: "2px"}} className="w-full lg:w-4/12 mt-2 bg-blue-500"/>
                <p className="py-6">
                Udaan Properties have earned the badge as the prominent realtor in North Bengal, providing tailored real estate solutions for your dream home or the right office environment for your business. Finding the perfect space that fits your expectations can be a daunting task unless you have the ideal partner by your side. We connect you to the right place in primal locations that will be your home for years to come, holding memories in the walls and spreading joy to the residents.
                </p>
                <br/>
                <p>Our team consists of highly-trained specialists who will assist you through every step of the way. We are focused on providing the best quality service to you.
                We believe in building lasting relationship with our clients. We are always quick to respond to your enquiries with relevant consultations and feedback.
                </p>
            </div>
            <div className="w-full order-1 lg:order-2 lg:w-6/12">
                <img src="/images/house.gif" />
            </div>        
        </section>

    );
}

export default Section1;