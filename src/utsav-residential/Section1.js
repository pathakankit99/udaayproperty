function Section1() {
    return (
        <section>
            <div className="p-4 pt-32 lg:pt-4 lg:px-16 flex flex-wrap text-left items-center">
                <div className="w-full p-4 lg:w-6/12 order-1 lg:order-2">
                    <img className="w-full" src="/images/utsav.jpg"/>
                </div>
                <div className="w-full p-4 lg:w-6/12 order-2 lg:order-1">
                    <h3 className="heading py-4 ">Utsav Residential</h3>
                    <hr style={{height: "2px"}} className="w-full lg:w-4/12 bg-blue-500"/>
                    <p className="py-6">
                        Utsav Residential, is a proposed modern integrated township located at Medical More, near North Point residential boarding school, opposite SSB Camp, Ranidanga. 
                        Buzzing with development activities, the plots on offer in Utsav Residential are in various sizes of <b>115 to 1000 sq yard</b>, enabling you to build a house the way you desire.<br/>
                        <br/>
                    </p>
                </div>
            </div>     
        </section>
    );
}

export default Section1;