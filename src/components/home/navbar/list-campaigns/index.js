import './styles.css';
import { data } from '../../../../assets/campaigns/campaigns.json';

const ListCampaigns = ({ active }) => {

    const customClass = active ? 'active' : '';

    return (
        <div className={`list-campaigns ${customClass}`}>
                {active ? (<ul>
                    {data.map( ({name}) => (<li key={name}><a href={`#${name}`}>{name}</a></li>))}
                </ul>) : (<></>)}
            </div>
    );
}

export default ListCampaigns;