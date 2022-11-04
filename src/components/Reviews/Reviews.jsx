import './Reviews.css';
import Anna from '../../images/ava-03.png';
import Mykola from '../../images/ava-02.png';
import Natsya from '../../images/ava-01.png';
import Spot from '../../images/spot.svg';

const Reviews = () => {
    return (
        <div className="reviews-container">
            <div className="students-reviews">
                <h2 className="review-title">
                    Students reviews
                </h2>
                <div className="reviews-item-wrapper">
                    <div className="reviews-item">
                        <div className="reviews-ava">
                            <img src={Anna} alt="" />
                            <img src={Spot} alt="" className='spot anna-spot' />
                            <div className="black-outline bo-anna"></div>
                            <div className="black-dot bd-anna"></div>
                        </div>
                        <div className="reviews-desc">
                            <h4 className="student-name">Anna Tyuneva</h4>
                            <div className="sr-div">
                                <p className='student-review'>The course is great! Teachers talks very interesting and accessible. Thank you very much!</p>

                            </div>
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div className="reviews-ava">
                            <img src={Mykola} alt="" />
                            <img src={Spot} alt="" className='spot mykola-spot' />
                            <div className="black-outline bo-mykola"></div>
                            <div className="black-dot bd-mykola"></div>
                        </div>
                        <div className="reviews-desc">
                            <h4 className="student-name">Mykola Dunayev</h4>
                            <div className="sr-div">
                                <p className='student-review'>The course is clear enough. Well explained a lot of practice. I recommend to everyone!</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div className="reviews-ava">
                            <img src={Natsya} alt="" />
                            <img src={Spot} alt="" className='spot natsya-spot' />
                            <div className="black-outline bo-natsya"></div>
                            <div className="black-dot bd-natsya"></div>
                        </div>
                        <div className="reviews-desc">
                            <h4 className="student-name">Nastya Kozarchuk</h4>
                            <div className="sr-div">
                                <p className='student-review'>The training was in one breath. Very accessible courses, everything is very clear and good.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews