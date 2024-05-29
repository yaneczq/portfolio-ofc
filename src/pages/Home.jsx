import Post from "../components/Post/Post"
import Artists from "../components/Artists/Artists"
import Showlist from "../components/Showlist/Showlist"
import Footer from "../components/Footer/Footer"
import Marquee from "../components/Marquee/Marquee"
import Navbar from "../components/Navbar/Navbar"
import TextBanner from "../components/TextBanner/TextBanner"


const Home = () => {
  return (

    <div className="container">

        <div className="left-section">
          <Navbar></Navbar>
            <Marquee></Marquee>
            <TextBanner></TextBanner>
            <Footer></Footer>
        </div>
        <div className="right-section">
            <Post></Post>
            <Artists></Artists>
            <Showlist></Showlist>
        </div>

    </div>
  )
}

export default Home