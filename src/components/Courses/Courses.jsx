import './Courses.css';
import ArrowBlue from '../../images/ico_arrow-blue.svg';

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
                <div className="courses-item">
                    <div className="courses-item-desc">
                        <h4>Design</h4>
                        <h3>How to make a quality site in WordPress in 40 hours without experience</h3>
                    </div>
                    <div className="read-more">
                        <a href="#">Read More</a>
                        <img src={ArrowBlue} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;