import usePicker from '../../../hooks/usePicker'
import ListCampaigns from './list-campaigns';
import './styles.css';

const Navbar = () => {

    const { isActive, handlePicker } = usePicker();

    return (
        <div className="navbar">
            <div className='menu'>
                <div className='menu-campaigns' onClick={handlePicker}> Campaigns</div>
            </div>
            <ListCampaigns active={isActive} />
        </div>
    );
}

export default Navbar;