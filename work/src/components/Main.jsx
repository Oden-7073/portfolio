import '../styles/style.scss';
import Gallery from './Gallery';
import { useTranslation } from "react-i18next";


function Main() {
    const { t } = useTranslation();
    return(
        <main className='l-main'>
            <div className='l-main-summy pb_100' data-aos="fade-down">
                <h1>SUMMARY</h1>
                <h2 className='mb_10'>Taiwan</h2>
                <div className='mb_10'>
                    <p>2012.10~2019.7</p>
                    <p>{t("main.summary.taiwan.desc1")}</p>
                    <p>{t("main.summary.taiwan.desc2")}</p>
                </div>
                <h2 className='mb_10'>Japan</h2>
                <div>
                    <p>2021.07~2025.02</p>
                    <p>{t("main.summary.japan.desc1")}</p>
                    <p>{t("main.summary.japan.desc2")}</p>
                </div>
            </div>        
            <div className="l-main-work pb_100" data-aos="fade-up">
                <h1>Work Skills</h1>
                <h2 className='mb_10'>Software</h2>
                <p className='mb_10'>
                    Photoshop / Illustrator / Indesgin /
                    Premiere / After Effects / Dreamwaver / Adobe XD / Figma / Visual Studio Code
                </p>
                <h2 className='mb_10'>Skills</h2>
                <p>
                    {t("main.skill.skills.desc")}
                </p>
            </div>
            <div className="l-main-work pb_100">
                <h1>Works</h1>
                <Gallery />
            </div>
        </main>        
    );
}

export default Main;