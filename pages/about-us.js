import Head from 'next/head'
import Navbar from '../src/Navbar'
import Footer from "../src/Footer"
import Section1 from '../src/about/Section1'
function aboutus() {
    return (
        <div>
            <Head>
                <title>Udaan Property - About Us</title>
                <meta name="description" content="Generate a SEO Friendly Description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active="aboutus"/>
            <main>
                <Section1/>
            </main>    
            <Footer/>
        </div>
    );
}

export default aboutus;