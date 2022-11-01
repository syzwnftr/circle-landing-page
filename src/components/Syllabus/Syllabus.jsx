import './Syllabus.css';
import Lady from '../../images/computer-couch.png';
import Num1 from '../../images/step_numb-01.svg';
import Num2 from '../../images/step_numb-02.svg';
import Num3 from '../../images/step_numb-03.svg';
import Arrow from '../../images/steps_arrow.svg';
import ArrowPlane from '../../images/steps_arrow-plane.svg';


const Syllabus = () => {
    return (
        <div className='syllabus-container'>
            <div className="syllabus-img">
                <img src={Lady} alt="" />
            </div>

            <div className="syllabus-step">
                <h2>Syllabus of courses</h2>
                <div className="syllabus-items-container">
                    <div className="syllabus-items">
                        <div className="syllabus-num">
                            <div className="num-text">01</div>
                            <img src={Num1} alt="" />
                        </div>
                        <div className="items-desc">
                            <h3 className="item-title">Videos from professionals</h3>
                            <p className="item-text">Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation.</p>
                        </div>
                        <div className="syllabus-arrow">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="syllabus-items">
                        <div className="syllabus-arrow">
                            <img src={Arrow} alt="" className='arrow-two' />
                        </div>
                        <div className="syllabus-num num2">
                            <div className="num-text two">02</div>
                            <img src={Num2} alt="" />
                        </div>
                        <div className="items-desc">
                            <h3 className="item-title">Practical independent work</h3>
                            <p className="item-text">Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings.</p>
                        </div>
                    </div>
                    <div className="syllabus-items">
                        <div className="syllabus-num">
                            <div className="num-text">03</div>
                            <img src={Num1} alt="" />
                        </div>
                        <div className="items-desc">
                            <h3 className="item-title">Feedback from specialists</h3>
                            <p className="item-text">Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.</p>
                        </div>
                        <div className="syllabus-arrow arrow-3">
                            <img src={ArrowPlane} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Syllabus;