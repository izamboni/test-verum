import './styles.css';
import Box from './box';
import { data } from '../../../assets/campaigns/campaigns.json';
import { banners } from '../../../assets/campaigns/banners';

const Main = () => {
    return (
        <div className="main">
            {data.map(campaign => 
                <Box campaign={campaign} key={campaign.key} banner={banners.filter(banner => banner.key === campaign.key)}/>
            )}
        </div>
    );
}

export default Main;