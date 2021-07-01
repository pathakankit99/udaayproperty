import { Slide } from 'react-slideshow-image';
import {GrNext, GrPrevious}  from 'react-icons/gr'
function Section1() {
    const options={
        arrows: true,
        duration: 3000,
        indicators: false,
        easing:"linear",
        nextArrow: (<div className="icon icon-next"><GrNext/></div>),
        prevArrow: (<div className="icon icon-prev"><GrPrevious/></div>)
    }
    return (
        <section>
             <Slide {...options}>
                <div className="each-slide">
                    <img src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="each-slide">
                    <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="each-slide">
                    <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>
            </Slide>
        </section>
    );
}

export default Section1;