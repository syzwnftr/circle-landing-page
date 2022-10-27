import Navbar from "../Navbar/Navbar";
import './Hero.css';
import Men from '../../images/hero_illustr.svg';
import Logo1 from '../../images/hero_logo-01.svg'
import Logo2 from '../../images/hero_logo-02.svg'
import Logo3 from '../../images/hero_logo-03.svg'
import Logo4 from '../../images/hero_logo-04.svg'
import Plane from '../../images/hero_illustr-plane.svg'

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
                    <img src={Plane} alt="" className="hero-plane" />
                </div>
            </div>
            <div className="hero-logo-wrapper">
                <div className="hero-logo">
                    <img src={Logo1} alt="" />
                </div>
                <div className="hero-logo">
                    <img src={Logo2} alt="" />
                </div>
                <div className="hero-logo">
                    <img src={Logo3} alt="" />
                </div>
                <div className="hero-logo">
                    <img src={Logo4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;