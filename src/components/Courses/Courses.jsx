import './Courses.css';
import ArrowBlue from '../../images/ico_arrow-blue.svg';
import Clock from '../../images/courses_illustr-clock.svg';
import Graph1 from '../../images/courses_illustr-graph.svg';
import Graph2 from '../../images/courses_illustr-graph2.svg';
import Screen1 from '../../images/courses_illustr-screen.svg';
import Screen2 from '../../images/courses_illustr-screen2.svg';


const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses-desc">
                <h2 className="courses-desc-title">
                    Professional courses on creating websites
                </h2>
                <h3 className="courses-desc-text">
                    Our courses are complete professional courses of high quality that include a set of video lessons, practical and training materials.
                </h3>
            </div>

            <div className="courses-items-wrapper">
                <div className="courses-item design">
                    <div className="courses-item-desc">
                        <h4>Design</h4>
                        <h3>How to make a quality site in WordPress in 40 hours without experience</h3>
                    </div>
                    <div className="read-more">
                        <a href="#">Read More</a>
                        <img src={ArrowBlue} alt="" className='arrowBlue' />
                    </div>
                    <div className="courses-item-illus">
                        <div className="clock-hand"></div>
                        <img src={Clock} alt="" />
                    </div>
                </div>
                <div className="courses-item programming">
                    <div className="courses-item-desc">
                        <h4>Programming</h4>
                        <h3>WordPress: How to start in a developer without any basic knowledge </h3>
                    </div>
                    <div className="read-more">
                        <a href="#">Read More</a>
                        <img src={ArrowBlue} alt="" className='arrowBlue' />
                    </div>
                    <div className="courses-item-illus">
                        <img src={Screen2} alt="" className='illus-one' />
                        <img src={Screen1} alt="" className='illus-two' />
                    </div>
                </div>
                <div className="courses-item seo">
                    <div className="courses-item-desc">
                        <h4>Seo</h4>
                        <h3>Creating dynamic sites with CMS WordPress + SEO for WordPress websites </h3>
                    </div>
                    <div className="read-more">
                        <a href="#">Read More</a>
                        <img src={ArrowBlue} alt="" className='arrowBlue' />
                    </div>
                    <div className="courses-item-illus">
                        <img src={Graph1} alt="" className='illus-one' />
                        <img src={Graph2} alt="" className='illus-two' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;