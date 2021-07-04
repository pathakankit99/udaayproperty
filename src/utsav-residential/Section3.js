import { FaCheck } from "react-icons/fa";

function Section3() {
    return (
        <section>
            <div className="p-4 pt-4 lg:px-16 flex flex-wrap text-left items-center">
                <div className="w-full p-4 lg:w-6/12 order-1 lg:order-2">
                    <img className="w-full" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="w-full p-4 lg:w-6/12 order-2 lg:order-1">
                    <h3 className="heading py-4 ">Features</h3>
                    <hr style={{height: "2px"}} className="w-full lg:w-4/12 bg-blue-500"/>
                    <p className="py-6">
                        Utsav Residential, provides all basic necessities like 
                        <ul className="py-4">
                            <li><span className="text-green-500 inline-block"><FaCheck/></span> 24Hrs Electricity Supply</li>
                            <li><span className="text-green-500 inline-block"><FaCheck/></span> 24Hrs Water Supply</li>
                            <li><span className="text-green-500 inline-block"><FaCheck/></span> Emergency Services are available</li>
                        </ul>
                    </p>
                </div>
            </div>     
        </section>
    );
}

export default Section3;