import './Question.css';
import IllustBg from '../../images/questions_illustr-bg.svg';
import IllustPlane from '../../images/questions_illustr-plane.svg';
import Illust from '../../images/questions_illustr.svg';

const Question = () => {
    return (
        <div className='question-container'>
            <div className="question-text">
                <h2>Still have questions?</h2>
                <h3>Leave a request and we will contact you to help you choose the best training format. </h3>
                <div className="email-button-wrapper">
                    <input type="text" placeholder='Your email' className='input-email' />
                    <button className='btnSubmit'>Submit</button>
                </div>
            </div>
            <div className="question-illus">
                <img src={Illust} alt="" className='illus' />
                <img src={IllustBg} alt="" className='illusBg' />
                <img src={IllustPlane} alt="" className='illusPlane' />
                <div className="pink-dot"></div>
                <div className="b-dot"></div>
                <div className="b-outline"></div>
            </div>
        </div>
    )
}

export default Question;