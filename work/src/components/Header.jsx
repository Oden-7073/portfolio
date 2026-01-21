import '../styles/style.scss';
import ToggleSwitch from './ToggleSwitch';
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
    return(
        <header className="l-header">
            <div className="l-header-left" data-aos="fade-left">
                <div className="l-header-left-profile">
                    <div className="l-header-left-profile_icon">
                        <h2>{t("header.profile.name")}</h2>
                        <img src="./assets/index_fig02.webp" alt="profile icon01">
                        </img>                   
                    </div>                    
                </div>
                <div className="l-header-left-txtarea">
                    <p className='mb_10'>{t("header.profile.intro.line1")}</p>
                    <p>{t("header.profile.intro.line2")}</p>
                </div>                
            </div>
            <div className="l-header-right" data-aos="fade-right">
                <div className="l-header-right_ttlbox">
                    <h1>{t("header.title")}</h1>
                    <div>
                        <p className='mb_10'>{t("header.subtitle.line1")}<br />{t("header.subtitle.line2")}</p>
                        <ToggleSwitch />
                    </div>                    
                </div>
                <img src="./assets/index_fig01.svg" alt="profile icon02"></img>
            </div>
        </header>
    );
}

export default Header;