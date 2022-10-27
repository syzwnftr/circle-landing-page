import Navbar from "../Navbar/Navbar";
import './Hero.css';
import Men from '../../images/hero_illustr.svg'

const Hero = () => {
    return (
        <div className="hero-container">
            <Navbar />
            <div className="hero-desc">
                <div className="hero-desc-left">
                    <h1>Your next big
                        idea starts here</h1>
                    <h3>The ideal framework to learn how to manage all aspects of startup.</h3>
                    <button className="btnStart">Start For Free</button>
                </div>
                <div className="hero-desc-right">
                    <img src={Men} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;