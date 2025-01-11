import { useState,useEffect } from "react";
import Modal from "./Modal";
import '../styles/style.scss';

const items = [
    { 
        id: 1, 
        title: "三菱電機インフォメーションネットワーク株式会社", 
        image: "./assets/gallery01_fig01.png", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript"],
        date: "2023.04 - 2024.04",
        links: [
            { label: "https://www.mind.co.jp/", url: "https://www.mind.co.jp/" }
          ],
        images: ["./assets/gallery01_fig02.png", "./assets/gallery01_fig03.png"],
        details: {
            intro: "主に担当した範囲は、MINDのページ再構築におけるコーディングです。以下は実際にコーディング制作に参加した具体的な範囲です:",
            list: [
              {text: "イベント・セミナー", url: "https://www.mind.co.jp/event/index.html"},
              { text: "大人気の港さんがMIND 5のソリューションストーリー", url: "https://www.mind.co.jp/focus/index.html" },
              { text: "お役立ち情報", url: "https://www.mind.co.jp/useful/index.html" } // 沒有超連結的條目=url:null
            ]
        }
    },
    { 
        id: 2, 
        title: "IIJ", 
        image: "./assets/gallery02_fig01.png", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.iij.ad.jp/", url: "https://www.iij.ad.jp/" }
          ],
        images: ["./assets/gallery02_fig02.png", "./assets/gallery02_fig03.png", "./assets/gallery02_fig04.png", "./assets/gallery02_fig05.png","./assets/gallery02_fig06.png", "./assets/gallery02_fig07.png", "./assets/gallery02_fig08.png"],
        details: {
            intro: "主に担当した範囲は、各種機能のサブページのコーディングおよびデザイン制作、さらに日常的な保守・更新作業です。このようなページはIIJ内で非常に多く存在しますが、ここでは一部のみを列挙します。",
            list: [
              {text: "IIJ IoTサービス（サブページ含む）", url: "https://www.iij.ad.jp/biz/iot/"},
              { text: "IIJ LoRaWAN®ソリューション（サブページ含む）", url: "https://www.iij.ad.jp/biz/lorawan/" },
              { text: "パートナーソリューション（サブページ含む）", url: "https://www.iij.ad.jp/svcsol/partner/solution/" } ,
              { text: "電子@連絡帳の活用状況", url: "https://www.iij.ad.jp/biz/e-note/results.html" } // 沒有超連結的條目=url:null              
            ]
        }
    },
    { 
        id: 3, 
        title: "奥村 浩隆 先生-新座志木中央総合病院", 
        image: "./assets/gallery03_fig01.png", 
        description: "病院が一般の方々のために作成した医師個人用LPサイトであり、患者が医師の経歴や得意とする専門分野を知ることを目的としています。主に担当した範囲は、FigmaでUI/UXをデザイン作成した後、LPページを制作することです。" ,
        tags: ["Html", "Css", "Coding","LP","UI/UX"],
        date: "2023.05",
        links: [
            { label: "https://medicalnote-doctor-okumura.jp/", url: "https://medicalnote-doctor-okumura.jp/" }
          ],
    },
    { 
        id: 4, 
        title: "株式会社ムサシ", 
        image: "./assets/gallery04_fig01.png", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.musashinet.co.jp/", url: "https://www.musashinet.co.jp/" }
          ],
        images: ["./assets/gallery04_fig02.png", "./assets/gallery04_fig03.png", "./assets/gallery04_fig04.png"],
        details: {
            intro: "主に担当した範囲は、各種機能サブページのコーディングおよび図版作成、さらに日常的な保守・更新作業です。",
            list: [
              {text: "業績ハイライト（連結）", url: "https://www.musashinet.co.jp/ir/financial/highlight.html"},
              { text: "業績ハイライト（単体）", url: "https://www.musashinet.co.jp/ir/financial/highlight-nonconsolidated.html" },
              { text: "印刷システム", url: "https://www.musashinet.co.jp/department/print/" },
              {text: "情報・産業システム", url: "https://www.musashinet.co.jp/department/info/"},
              { text: "金融汎用システム（サブページ含む）", url: "https://www.musashinet.co.jp/department/tellac/" },
              { text: "先輩社員の声K.M.", url: "https://www.musashinet.co.jp/recruit/interview/interview1.html" }, 
              { text: "先輩社員の声T.K.", url: "https://www.musashinet.co.jp/recruit/interview/interview2.html" },
              { text: "先輩社員の声H.W.", url: "https://www.musashinet.co.jp/recruit/interview/interview4.html" } // 沒有超連結的條目=url:null
            ]
        }
    },
  ];

  
function Gallery() {
    const [selectedItem, setSelectedItem] = useState(null); // 控制模modal内容
    const [isModalOpen, setIsModalOpen] = useState(false); // 控制modal顯示狀態

    const openModal = (item) => {
        setSelectedItem(item); // 設置選中的卡片內容
        setIsModalOpen(true); // 打開模態框
    };

    const closeModal = () => {
        setSelectedItem(null); // 清空選中的卡片
        setIsModalOpen(false); // 關閉模態框
    };

    useEffect(() => { //鍵盤可以esc取消modal
    const handleKeyDown = (e) => {
        if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    return(
        <div>
            {/* 畫廊區域 */}
            <div className="l-gallery">
                {items.map((item) => (
                <div key={item.id} className="l-gallery-item" onClick={() => openModal(item)}>
                    <img src={item.image} alt={item.title} />
                    <p className="date mb_10">{item.date}</p>
                    <h2 className="mb_20">{item.title}</h2>
                    <div className="tags">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="tags_tag">{tag}</span>
                        ))}
                    </div>
                </div>
                ))}
            </div>

            {/* modal區域 */}
            {isModalOpen && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
    )

}
export default Gallery;