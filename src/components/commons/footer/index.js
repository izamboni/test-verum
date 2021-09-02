import codecademy from "../../../resources/codecademy.svg.png";
import linkedin from "../../../resources/LinkedinBlack.png";
import './styles.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="contact-info">
                <a className="codecademy" href="https://www.codecademy.com/profiles/ignacioZamboni4309031958">
                    <img src={codecademy} alt="Click this"/>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/ignacio-zamboni-espa%C3%B1ol-37b179169/">
                    <img src={linkedin} alt="Click this"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;