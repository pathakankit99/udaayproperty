import Head from 'next/head'
import Navbar from '../src/Navbar'
import Section1 from '../src/home/Section1'
import Section2 from '../src/home/Section2'
import Section3 from '../src/home/Section3'
import Footer from "../src/Footer"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Udaan Property</title>
        <meta name="description" content="Generate a SEO Friendly Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar active="home"/>
      <main>
        <Section1/>
        <Section2/>
        <Section3/>
      </main>    
      <Footer/>
    </div>
  )
}
