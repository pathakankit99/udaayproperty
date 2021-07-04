import {MdLocationOn} from "react-icons/md"
function Section2() {
    return (
        <section>
            <div className="p-4 pt-4 lg:px-16 flex flex-wrap text-left items-center">
                <div className="w-full p-4 lg:w-6/12 order-1 lg:order-1">
                    <img className="w-full" src="https://nfr.indianrailways.gov.in/nfr/ImagesOfStations/1548652489497_Illumination%20_%20NJP.jpg"/>
                </div>
                <div className="w-full p-4 lg:w-6/12 order-2 lg:order-2">
                    <h3 className="heading py-4 ">Location</h3>
                    <hr style={{height: "2px"}} className="w-full lg:w-4/12 bg-blue-500"/>
                    <p className="py-6">
                        Utsav Residential, enjoys proximity to the
                        <ul className="py-4">
                            <li><span className="text-yellow-500 inline-block"><MdLocationOn/> </span> NJP Railway Station</li>
                            <li><span className="text-yellow-500 inline-block"><MdLocationOn/> </span> Bagdogra Airport</li>
                            <li><span className="text-yellow-500 inline-block"><MdLocationOn/> </span> North Bengal Medical College</li>
                            <li><span className="text-yellow-500 inline-block"><MdLocationOn/> </span> Neotia Nursig home</li>
                            <li><span className="text-yellow-500 inline-block"><MdLocationOn/> </span> North Bengal University</li>
                        </ul>
                        It is at a stones throw distance from <b> City Center Shopping Mall </b>, making it a very attractive destination.
                    </p>
                </div>
            </div>     
        </section>
    );
}

export default Section2;