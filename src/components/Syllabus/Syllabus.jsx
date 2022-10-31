import './Syllabus.css';
import Lady from '../../images/computer-couch.png';
import Num1 from '../../images/step_numb-01.svg';
import Num2 from '../../images/step_numb-02.svg';
import Num3 from '../../images/step_numb-03.svg';

const Syllabus = () => {
    return (
        <div className='syllabus-container'>
            <div className="syllabus-img">
                <img src={Lady} alt="" />
            </div>

            <div className="syllabus-step">
                <h2>Syllabus of courses</h2>
            </div>
        </div>
    )
}

export default Syllabus