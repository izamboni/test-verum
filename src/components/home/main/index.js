import './styles.css';
import Box from './box';
import { data } from '../../../assets/campaigns/campaigns.json';
import { banners } from '../../../assets/campaigns/banners';

function Main() {
    return (
        <div className="main">
            {data.map(campaign => 
                <Box campaign={campaign} banner={banners.filter(banner => banner.key === campaign.key)}/>
            )}
        </div>
    );
}

export default Main;