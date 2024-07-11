import { useNavigate } from 'react-router-dom';
import img3 from '../assests/img3.png'
import '../styles/Home.css'
const Home = () => {

  const navigate = useNavigate();

  const navigateToNews = () => {
    navigate('/news');
  };

  return (
    <>

    <div className="home-background p-4 text-center" >
      <img style={{width:'250px'}} src={img3} />

      <h2 className="fw-bold">Welcome to Daily News!</h2>

      <div className="col-lg-6 mx-auto">
        <h4><b>Stay informed with the latest updates from around the globe.</b></h4>
        <p className="lead mb-4" >
          At Daily Insight News, we bring you breaking news, in-depth analysis, and insightful commentary on the most pressing issues of our time.
        </p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <button type="button" onClick={navigateToNews} className="btn btn-primary btn-lg px-4 gap-3">Getting Started</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact-Us</button>
        </div>
      </div>

  </div>

  </>
  )
}

export default Home