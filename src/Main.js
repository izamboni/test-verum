import { useState } from "react";
import {madd, neve, ives, seren, derok} from './resources/campaigs/HeartOfTyre';

function Main() {
    return (
        <div className="main">
            <Box campaign='Heart of Tyre' members={[madd, neve, ives, seren, derok]} />
            {/* <Box campaign='Shadow of Tyre' members={['Ahst', 'Eustace', 'Moe Kowbull', 'Raost Tredder', 'Toot']} /> */}

        </div>
    );
}

function Box (props){

    const [active, setActive] = useState('');
    const changeActive = () => {
        active === '' ? setActive('active') : setActive('');
    }

    return (
        <div className={'box'} onClick={changeActive}>
            <Campaign campaign={props.campaign} />
            <Members members={props.members} active={active} />
        </div>
    );
}

function Campaign (props){
    return (
        <div className='campaign'>    
            {props.campaign}
        </div>
    );
}

function Members (props) {
    return (
        <div className={'members '  + props.active}>
            <div className={"list-members "  + props.active}>
                {props.members.map(member => (
                    <div>
                        <h4>{member.name}</h4> 
                        <h5>Race: {member.race}</h5> 
                        <h5>Class: {member.job}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Main;