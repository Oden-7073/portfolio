import '../styles/style.scss';
import Gallery from './Gallery';


function Main() {
    return(
        <main className='l-main'>
            <div className='l-main-summy pb_100'>
                <h1>SUMMARY</h1>
                <h2 className='mb_10'>Taiwan</h2>
                <div className='mb_10'>
                    <p>2012.10~2019.7</p>
                    <p>約7年間にてグラフィックデザイナーとして勤務。</p>
                    <p>広告物、ブランドビジュアル、印刷物など幅広い制作業務を経験し、実務スキルを磨いてきました。</p>
                </div>
                <h2 className='mb_10'>Japan</h2>
                <div>
                    <p>2021.07~2025.02</p>
                    <p>日系企業にてWebデザイナーとして従事。</p>
                    <p>BtoBサイトやLP制作、UI設計など、ディレクターやエンジニアと連携しながらWeb制作全般を担当しました。</p>
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