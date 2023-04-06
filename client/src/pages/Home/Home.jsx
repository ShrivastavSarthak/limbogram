import Feed from '../../components/feed/Feed'
import Footer from '../../components/footer/footer'
import Navbar from "../../components/Navbar/Navbar"
import Rightbar from '../../components/Rightbar/Rightbar'
import Search from '../../components/Search/Search'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="place  ">
        <div className="hideOnly me-4">
          <Search />
        </div>
        <Feed />
        <div>
          <div className='RightSidebar'>
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home