import Head from 'next/head'
import Footer from "../src/Footer"
import Section1 from '../src/demo/Section1';
import Navbar from '../src/demo/Navbar';
Section1
function demo() {
    return (
        <div className="relative">
      <Head>
        <title>Udaan Property</title>
        <meta name="description" content="Generate a SEO Friendly Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar active="home"/>
      <main>
        <Section1/>
      </main>    
      <Footer/>
    </div>
    );
}

export default demo;