import './Footer.css';
import LogoColor from '../../images/logo-color.svg';
import LogoCopyright from '../../images/logo-copyright.svg';
import DashVertical from '../../images/dash-vertical.svg';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-logo-contact">
                <div className="footer-logo">
                    <img src={LogoColor} alt="" />
                </div>
                <div className="footer-nav">
                    <div className="footer-nav-items">
                        <a href='#'>About</a>
                        <a href='#' className='a-last'>Program</a>
                    </div>
                    <div className="footer-nav-items">
                        <a href='#'>Courses</a>
                        <a href='#' className='a-last'>Reviews</a>
                    </div>
                    <div className="dash-vertical">
                        <img src={DashVertical} alt="" />
                    </div>
                    <div className="dash-vertical two">
                        <img src={DashVertical} alt="" />
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="footer-contact-items">
                        <a href='#'>www.halo-lab.com</a>
                        <a href='#' className='a-last'>mail@halo-lab.com</a>
                    </div>
                    <div className="footer-contact-items">
                        <a href='#'>+38 096 272 2100</a>
                        <p className='a-last'>Ukraine, Odessa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;