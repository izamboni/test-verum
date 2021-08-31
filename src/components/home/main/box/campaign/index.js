import './styles.css';

function Campaign ({ campaign, actived, description, banner}){
    return (
        <div className={`campaign ${campaign}`} id={campaign} onClick={actived}>
            <div className='description'>
                <h1>{campaign}</h1>
                <p>{description}</p>
            </div>
            <img src={banner} alt={campaign} />
        </div>
    );
}

export default Campaign;