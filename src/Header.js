import { useState } from "react";

function Header(){

    const [active, setActive] = useState('');
    const changeActive = () => {
        active === '' ? setActive('active') : setActive('');
    }

    return (
        <div className="header">
            <div className='menu'>
                <div className='menu-campaigns' onClick={changeActive}> Campaigns</div>
            </div>
            <ListCampaigns active={active} />
        </div>
    );
}

function ListCampaigns (props){
    return (
        <div className={`list-campaigns ${props.active}`}>
                {props.active === 'active' ? (<ul>
                    <li key='Heart of Tyre'><a href='#Heart of Tyre'> Heart of Tyre </a></li>
                    <li key='Shadow of Tyre'><a href='#Shadow of Tyre'>Shadow of Tyre </a></li>
                    <li key='Soul of Tyre'><a href='#Soul of Tyre'>Soul of Tyre </a></li>
                    <li key='Shattered Crowns'><a href='#Shattered Crowns'>Shattered Crowns </a></li>
                    <li key='Strange Roads'><a href='#Strange Roads'>Strange Roads </a></li>
                    <li key='Tearing Veil'><a href='#Tearing Veil'>Tearing Veil </a></li>
                    <li key='Death and Debts'><a href='#Death and Debts'>Death and Debts </a></li>
                    <li key='Broken Bonds'><a href='#Broken Bonds'>Broken Bonds</a></li>
                </ul>) : (<></>)}
            </div>
    );
}


export default Header;