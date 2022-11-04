import './Reviews.css';
import Anna from '../../images/ava-03.png';
import Mykola from '../../images/ava-02.png';
import Natsya from '../../images/ava-01.png';

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
                        </div>
                        <div className="reviews-desc">
                            <h3 className="student-name">Anna Tyuneva</h3>
                            <p className='student-review'>The course is great! Teachers talks very interesting and accessible. Thank you very much!</p>
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div className="reviews-ava">
                            <img src={Mykola} alt="" />
                        </div>
                        <div className="reviews-desc">
                            <h3 className="student-name">Mykola Dunayev</h3>
                            <p className='student-review'>The course is clear enough. Well explained a lot of practice. I recommend to everyone!</p>
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div className="reviews-ava">
                            <img src={Natsya} alt="" />
                        </div>
                        <div className="reviews-desc">
                            <h3 className="student-name">Nastya Kozarchuk</h3>
                            <p className='student-review'>he training was in one breath. Very accessible courses, everything is very clear and good.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews