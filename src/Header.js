import { useState } from "react";

function Header(){

    const [active, setActive] = useState('');
    const changeActive = () => {
        active === '' ? setActive('active') : setActive('');
    }

    return (
        <div className="header">
            <div className='menu-campaigns' onClick={changeActive}> Campaigns
            </div>
            {/* {active === 'active' ? (<ListCampaigns active={active}/>) : <></>} */}
            <ListCampaigns active={active} />
        </div>
    );
}

function ListCampaigns (props){
    return (
        <div className={'list-campaigns ' + props.active}>
                {props.active === 'active' ? (<ul>
                    <li><a href='#Heart of Tyre'> Heart of Tyre </a></li>
                    <li><a href='#Shadow of Tyre'>Shadow of Tyre </a></li>
                    <li><a href='#Soul of Tyre'>Soul of Tyre </a></li>
                    <li><a href='#Shattered Crowns'>Shattered Crowns </a></li>
                    <li><a href='#Strange Roads'>Strange Roads </a></li>
                    <li><a href='#Tearing Veil'>Tearing Veil </a></li>
                    <li><a href='#Death and Debts'>Death and Debts </a></li>
                    <li><a href='#Broken Bonds'>Broken Bonds</a></li>
                </ul>) : (<></>)}
            </div>
    );
}


export default Header;