import { Link } from "react-router-dom"
import houston from '../assets/images/houston.svg'

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="notfound_box">
          <h2 className="notfound_box_title">Houston !
          </h2>
          <div className="notfound_mini_box">
            <h1 className="notfound_mini_box_404">4</h1>
            <Link to="/" className="notfound_mini_box_404">0</Link>
            <h1 className="notfound_mini_box_404">4</h1>
          </div>  
          <h2 className="notfound_box_title">We have a problem ...</h2>
          <p className="notfound_box_text">click the "0" to back</p>
          <div className="notfound_box_images">
            <img src={houston} alt="" className="houston_left" />
            <img src={houston} alt="" className="houston_right" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound