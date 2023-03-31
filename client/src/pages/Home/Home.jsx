import Feed from '../../components/feed/Feed'
import Navbar from "../../components/Navbar/Navbar"
import Search from '../../components/Search/Search'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="place d-flex ">
        <Search />
        <Feed />
      </div>
    </div>
  )
}

export default Home