import './styles.css';
import { Link } from 'react-router-dom';

const Campaign = ({ campaign, actived, description, banner}) => {
    return (
        <div className={`campaign ${campaign}`} id={campaign} onClick={actived}>
            <div className='description'>
                <Link to="/details"><h1>{campaign}</h1></Link>
                <p>{description}</p>
            </div>
            <img src={banner} alt={campaign} />
        </div>
    );
}

export default Campaign;