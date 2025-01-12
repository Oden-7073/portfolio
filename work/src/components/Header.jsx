import '../styles/style.scss';
import ToggleSwitch from './ToggleSwitch';

function Header() {
    return(
        <header className="l-header">
            <div className="l-header-left">
                <div className="l-header-left-profile">
                    <div className="l-header-left-profile_icon">
                        <h2>Profile</h2>
                        <img src="./assets/index_fig02.webp" alt="profile icon01">
                        </img>                   
                    </div>                    
                </div>
                <div className="l-header-left-txtarea">
                    <h2>Oden</h2>
                    <p className='mb_10'>From Taiwan, go to  Japan in 2019.<br/>2009 百年來的凝視ー 大学生ポスターデザインコンテスト 「佳作」賞をもらいました。</p>
                    <p>本サイトをReactで作成します。</p>
                </div>                
            </div>
            <div className="l-header-right">
                <div className="l-header-right_ttlbox">
                    <h1>子午</h1>
                    <div>
                        <p className='mb_10'>Odens Personal<br/> Portfolio Website</p>
                        <ToggleSwitch />
                    </div>                    
                </div>
                <img src="./assets/index_fig01.svg" alt="profile icon02"></img>
            </div>
        </header>
    );
}

export default Header;