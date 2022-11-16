import './Navbar.css';
import Logo from '../../images/logo.svg';
import Search from '../../images/search.svg';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-items">
                    <img src={Logo} alt="" className='logo' />
                </div>
                <nav className="nav-items links">
                    <a href="" className='link about'>About</a>
                    <a href="" className='link program'>Program</a>
                    <a href="" className='link courses'>Courses</a>
                    <a href="" className='link reviews'>Reviews</a>
                </nav>
                <div className="nav-items searchSignIn">
                    <img src={Search} alt="" className='search' />
                    <button>Sign In</button>
                </div>
                <div className="nav-items hamburger">
                    <div className="">
                        <span className='lineStroke'></span>
                        <span className='lineStroke mid'></span>
                        <span className='lineStroke bottom'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;