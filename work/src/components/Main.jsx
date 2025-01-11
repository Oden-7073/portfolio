import '../styles/style.scss';
import Gallery from './Gallery';

function Main() {
    return(
        <main className='l-main'>
            <div className='l-main-summy pb_100'>
                <h1>SUMMARY</h1>
                <h2 className='mb_10'>Taiwan</h2>
                <div className='mb_10'>
                    <p>2014.10 - 2016.11 BESTLINK 百事聯株式会社 グラフィックデザインナー</p>
                    <p>2017.03 - 2018.03 智多利株式会社 グラフィックデザインナー</p>
                    <p>2018.04 - 2019.07 陳石城株式会社 グラフィックデザインナー</p>
                </div>
                <h2 className='mb_10'>Japan</h2>
                <div>
                    <p>2021.07 - 2025 今 アドバー株式会社 Webデザイナー</p>
                </div>
            </div>        
            <div className="l-main-work pb_100">
                <h1>Work Skills</h1>
                <h2 className='mb_10'>Software</h2>
                <p className='mb_10'>
                    Photoshop / Illustrator / Indesgin /
                    Premiere / After Effects / Dreamwaver / Adobe XD / Figma / Visual Studio Code
                </p>
                <h2 className='mb_10'>Skills</h2>
                <p>
                    Html /  SCSS / Wordpress /  Javascript / UIUX Design / Graphic Design / Drawing / Creative / Photo retouching
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