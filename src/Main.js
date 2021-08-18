import { useState } from "react";

function Main() {
    return (
        <div className="main">
            <Box campaign='Heart of Tyre' members={['Madd Morc, ', 'Neve, ', 'Ives Brightburn, ', 'Seren Thistlehoove, ', 'Lord Antonius Volnaris']} />

            <Box campaign='Shadow of Tyre' members={['Ahst, ', 'Eustace, ', 'Moe Kowbull, ', 'Raost Tredder, ', 'Toot']} />

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
            <div>    
                {props.campaign}
            </div>
            <Members members={props.members} active={active} />
        </div>
    );
}

function Members (props) {
    return (
        <div className={'members '  + props.active}>
            <ul className={"list-members "  + props.active}>
                <li>{props.members}</li>
                {/* <li>{props.members[1]}</li>
                <li>{props.members[2]}</li>
                <li>{props.members[3]}</li>
                <li>{props.members[4]}</li> */}
            </ul>
        </div>
    );
}


export default Main;