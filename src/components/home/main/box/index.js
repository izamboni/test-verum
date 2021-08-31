import usePicker from '../../../../hooks/usePicker';
import './styles.css';
import Campaign from './campaign';
import Members from './members';

function Box ({ campaign, banner, description, members }){

    const  { isActive, handlePicker } = usePicker()

    return (
        <div className={'box'}>
            <Campaign campaign={campaign} banner={banner} actived={handlePicker} description={description} />
            <Members members={members} active={isActive} />
        </div>
    );
}

export default Box;