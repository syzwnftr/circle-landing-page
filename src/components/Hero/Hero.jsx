import Navbar from "../Navbar/Navbar";
import './Hero.css';
import Men from '../../images/hero_illustr.svg';
import Logo1 from '../../images/hero_logo-01.svg';
import Logo2 from '../../images/hero_logo-02.svg';
import Logo3 from '../../images/hero_logo-03.svg';
import Logo4 from '../../images/hero_logo-04.svg';
import Plane from '../../images/hero_illustr-plane.svg';
import Leave1 from '../../images/leaves-1.svg';
import Leave2 from '../../images/leaves-2.svg';

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
                    <img src={Men} alt="" className="men" />
                    <img src={Plane} alt="" className="hero-plane" />
                    <img src={Leave1} alt="" className="leave-1" />
                    <img src={Leave2} alt="" className="leave-2" />
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