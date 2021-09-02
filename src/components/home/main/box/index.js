import usePicker from '../../../../hooks/usePicker';
import './styles.css';
import Campaign from './campaign';
import Members from './members';

function Box ({ campaign, banner }) {
    const { name, data, description} = campaign;
    const  { isActive, handlePicker } = usePicker()

    return (
        <div className={'box'}>
            <Campaign campaign={name} banner={banner[0].banner} actived={handlePicker} description={description} />
            <Members members={data} active={isActive} />
        </div>
    );
}

export default Box;