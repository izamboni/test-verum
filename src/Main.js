import { useState } from "react";
import {madd, neve, ives, seren, derok} from './resources/campaigs/HeartOfTyre';
import {ahst, eustace, moe, raost, toot} from './resources/campaigs/ShadowOfTyre';
import {bela, braktor, alexander, hackne, ozzie} from './resources/campaigs/SoulOfTyre';

function Main() {
    return (
        <div className="main">
            <Box campaign='Heart of Tyre' members={[madd, neve, ives, seren, derok]} />
            <Box campaign='Shadow of Tyre' members={[ahst, eustace, moe, raost, toot]} />
            <Box campaign='Soul of Tyre' members={[bela, braktor, alexander, hackne, ozzie]} />

        </div>
    );
}

function Box (props){

    const [active, setActive] = useState('');
    const changeActive = () => {
        active === '' ? setActive('active') : setActive('');
    }

    return (
        <div className={'box'} /*onClick={changeActive}*/>
            <Campaign campaign={props.campaign} actived={changeActive} />
            <Members members={props.members} active={active} />
        </div>
    );
}

function Campaign (props){
    return (
        <div className='campaign' onClick={props.actived}>    
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
                        <h6><a href={member.wiki} target="_blank">More Info</a></h6>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Main;