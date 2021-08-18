import { useState } from "react";

function Main() {
    return (
        <div className="main">
            <Box campaign='Heart of Tyre' members={['Madd Morc', 'Neve', 'Ives Brightburn', 'Seren Thistlehoove', 'Lord Antonius Volnaris']} />
            <Box campaign='Shadow of Tyre' members={['Ahst', 'Eustace', 'Moe Kowbull', 'Raost Tredder', 'Toot']} />

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
                {props.members.map(member => (<div>{member}</div>))}
            </div>
        </div>
    );
}


export default Main;