import { useState,useEffect } from "react";
import Modal from "./Modal";
import '../styles/style.scss';

const items = [
    { 
        id: 1, 
        title: "三菱電機インフォメーションネットワーク株式会社", 
        image: "./assets/gallery01_fig01.webp", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript"],
        date: "2023.04 - 2024.04",
        links: [
            { label: "https://www.mind.co.jp/", url: "https://www.mind.co.jp/" }
          ],
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
        image: "./assets/gallery02_fig01.webp", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.iij.ad.jp/", url: "https://www.iij.ad.jp/" }
          ],
        images: ["./assets/gallery02_fig02.webp", "./assets/gallery02_fig03.webp", "./assets/gallery02_fig04.webp", "./assets/gallery02_fig05.webp","./assets/gallery02_fig06.webp", "./assets/gallery02_fig07.webp", "./assets/gallery02_fig08.webp"],
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
        id: 4, 
        title: "株式会社ムサシ", 
        image: "./assets/gallery04_fig01.webp", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.musashinet.co.jp/", url: "https://www.musashinet.co.jp/" }
          ],
        images: ["./assets/gallery04_fig02.webp", "./assets/gallery04_fig03.webp", "./assets/gallery04_fig04.webp"],
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
    { 
        id: 5, 
        title: "ムサシ・イメージ情報株式会社", 
        image: "./assets/gallery05_fig01.webp", 
        description: "ユーザー企業の製品や事例などを紹介する総合的な企業ウェブサイトの構築支援。" ,
        tags: ["Html", "Css", "Coding","JavaScript","UI/UX"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.musashi-ij.co.jp/", url: "https://www.musashi-ij.co.jp/" }
          ],
        details: {
            intro: "主に担当した範囲は、各種機能サブページのコーディング、さらに日常的な保守・更新作業です。",
            list: [
              {text: "用語集", url: "https://www.musashi-ij.co.jp/glossary/"},
              { text: "メディア変換サービス", url: "https://www.musashi-ij.co.jp/business/" },
              { text: "デジタルイメージング", url: "https://www.musashi-ij.co.jp/business/digital/" },
              {text: "マイクロイメージング", url: "https://www.musashi-ij.co.jp/business/microfilm/"},
              { text: "メディカルサポート", url: "https://www.musashi-ij.co.jp/business/medical/" } // 沒有超連結的條目=url:null
            ]
        }
    },
    { 
        id: 6, 
        title: "人生を輝かせる趣味釣りあそびジャーナル", 
        image: "./assets/gallery06_fig01.webp", 
        description: "PHPを使用して構築された、釣りの楽しさやさまざまな釣り知識を紹介する趣味志向のウェブサイト" ,
        tags: ["Html", "Css", "Coding","JavaScript","Wordpress","図版作成","UI/UX"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://tsuriasobi.net/", url: "https://tsuriasobi.net/" }
          ],
        images: ["./assets/gallery06_fig02.webp", "./assets/gallery06_fig03.webp"],
        details: {
            intro: "主に担当した範囲は、各種機能サブページのコーディングおよび図版作成、さらに日常的な保守・更新作業です。",
            list: [
              {text: "さくらちゃんが１本のサオで自分だけの図鑑作りに挑戦！", url:null},
              { text: "魚の図鑑", url: "https://tsuriasobi.net/dictionary/" },
              { text: "魚の料理方法", url: "https://tsuriasobi.net/#cook" },
              {text: "釣りのトラブルシューティングと準備", url: "https://tsuriasobi.net/#howto"},
              { text: "魚の種類別・ルアー釣り入門", url: "https://tsuriasobi.net/#lure" }
            ]
        }
    },
    { 
        id: 13, 
        title: "株式会社コバヤシ", 
        image: "./assets/gallery13_fig01.webp", 
        description: "株式会社コバヤシは、「コバゾール」を始めとする自社オリジナル製品の開発、製造、リサイクル事業や非石油系素材等までも手掛けるプラスチックの総合企業です。" ,
        tags: ["Html", "Css", "Coding","JavaScript","Wordpress","UI/UX"],
        date: "2023.05 - 2024.12",
        links: [
            { label: "https://www.kbjapan.co.jp/jpn", url: "https://www.kbjapan.co.jp/jpn" }
          ],
        details: {
            intro: "主に担当した範囲は、サブページのコーディング、さらに日常的な更新作業です。",
            list: [
              {text: "沿革（企業情報他ページ含む）", url: "https://www.kbjapan.co.jp/jpn/company/history"},
              { text: "環境課題解決に向けた取り組み", url: "https://www.kbjapan.co.jp/jpn/sustainability/sustainability-activities" },
              { text: "人権尊重・人材活躍に向けた取り組み", url: "https://www.kbjapan.co.jp/jpn/sustainability/sustainability-Initiatives" },
              { text: "社会との共栄に向けた取り組み", url: "https://www.kbjapan.co.jp/jpn/sustainability/sustainability-society" }
            ]
        }
    }, 
    { 
        id: 11, 
        title: "採用情報 | セガサミーホールディングス", 
        image: "./assets/gallery11_fig01.webp", 
        description: "セガサミーホールディングスの採用ページです。求職者向けに会社の環境や福利厚生を紹介することを目的としています。" ,
        tags: ["Html", "Css", "Coding","JavaScript"],
        date: "2023.07 - 2024.11",
        links: [
            { label: "https://www.segasammy.co.jp/ja/recruit/", url: "https://www.segasammy.co.jp/ja/recruit/" }
          ],
        details: {
            intro: "主に担当した範囲は、座談会セクションのコーディングや画像の修正および加工です。",
            list: [
              {text: "企業内大学「セガサミーカレッジ」の設立と取り組み", url: "https://www.segasammy.co.jp/ja/recruit/project/college.html"},
              { text: "人を知る（サブページ含む）", url: "https://www.segasammy.co.jp/ja/recruit/people/" },
              { text: "座談会から社風を知る ～若手社員編～（他の座談会ページ含む）", url: "https://www.segasammy.co.jp/ja/recruit/crosstalk/crosstalk01.html" }
            ]
        }
    },
    { 
        id: 8, 
        title: "大同通運グループ", 
        image: "./assets/gallery08_fig01.webp", 
        description: "ユーザー企業の車両レンタルサービスを紹介するウェブサイト。主に担当した範囲は、日常的な保守・更新作業ですです。" ,
        tags: ["Html", "Css", "Coding","JavaScript"],
        date: "2023.05 - 2024.11",
        links: [
            { label: " https://daido-grp.com/", url: " https://daido-grp.com/" }
          ]
    },
    { 
        id: 9, 
        title: "go global inter kids", 
        image: "./assets/gallery09_fig01.webp", 
        description: "Go Global Inter Kidsは有名なインターナショナルスクールであり、子どもたちに優れた外国語学習環境を提供することを目的としています。主に担当した範囲は、ウェブサイトの保守・更新と機能実装のコーディング(2024年4月まで担当" ,
        tags: ["Html", "Css", "Coding","JavaScript","Wordpress","図版作成","UI/UX"],
        date: "2021.07 - 2024.04",
        links: [
            { label: "https://www.gglobal.jp/", url: "https://www.gglobal.jp/" }
          ],
        images: ["./assets/gallery09_fig02.webp", "./assets/gallery09_fig03.webp","./assets/gallery09_fig04.webp", "./assets/gallery09_fig05.webp","./assets/gallery09_fig06.webp", "./assets/gallery09_fig07.webp","./assets/gallery09_fig08.webp"],
    },
    { 
        id: 10, 
        title: "JCHO大阪病院 脊椎外科センター", 
        image: "./assets/gallery10_fig01.webp", 
        description: "病院が一般の方々のために作成した医師個人用LPサイトであり、患者が医師の経歴や得意とする専門分野を知ることを目的としています。主に担当した範囲は、FigmaでUI/UXをデザイン作成した後、LPページを制作することです。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成","UI/UX"],
        date: "2023.12",
        images: ["./assets/gallery10_fig02.webp"]
    },
    { 
        id: 7, 
        title: "DAIDO.high-R", 
        image: "./assets/gallery07_fig01.webp", 
        description: "ユーザー企業の車両レンタルサービスを紹介するウェブサイト。主に担当した範囲は、FigmaでUI/UXをデザイン作成した後、LPページを制作することです。" ,
        tags: ["Html", "Css", "Coding","JavaScript","UI/UX","LP"],
        date: "2023.05",
        links: [
            { label: "https://www.daidohr.com/", url: "https://www.daidohr.com/" }
          ]
    }, 
    { 
        id: 3, 
        title: "奥村 浩隆 先生-新座志木中央総合病院", 
        image: "./assets/gallery03_fig01.webp", 
        description: "病院が一般の方々のために作成した医師個人用LPサイトであり、患者が医師の経歴や得意とする専門分野を知ることを目的としています。主に担当した範囲は、FigmaでUI/UXをデザイン作成した後、LPページを制作することです。" ,
        tags: ["Html", "Css", "Coding","LP","UI/UX"],
        date: "2023.05",
        links: [
            { label: "https://medicalnote-doctor-okumura.jp/", url: "https://medicalnote-doctor-okumura.jp/" }
          ],
    }, 
    { 
        id: 12, 
        title: "ニキビ一緒に治そうProject｜製薬会社のマルホ", 
        image: "./assets/gallery12_fig01.webp", 
        description: "ニキビ一緒に治そうProjectは製薬会社のマルホがニキビに関する情報を発信します。ニキビの原因から皮膚科でのニキビ治療をご紹介。" ,
        tags: ["Html", "Css", "Coding","JavaScript"],
        date: "2021.11 - 2022.11",
        links: [
            { label: "https://www.maruho.co.jp/kanja/nikibi/", url: "https://www.maruho.co.jp/kanja/nikibi/" }
          ],
        details: {
            intro: "主に担当した範囲は、「部位・お悩み別ニキビの治し方」セクションのサブページ追加します。",
            list: [
              {text: "あごニキビの原因と治し方、ケアは？", url: "https://www.maruho.co.jp/kanja/nikibi/tag/tag_11.html"},
              { text: "口周りニキビの原因と治し方、ケアは？", url: "https://www.maruho.co.jp/kanja/nikibi/tag/tag_09.html" },
              { text: "おでこニキビの原因と治し方、ケアは？", url: "https://www.maruho.co.jp/kanja/nikibi/tag/tag_10.html" },
              { text: "頬ニキビの原因とケア、治し方は？", url: "https://www.maruho.co.jp/kanja/nikibi/tag/tag_08.html" }
            ]
        }
    },
    { 
        id: 14, 
        title: "陳石城", 
        image: "./assets/gallery14_fig01.webp", 
        description: "陳石城に台湾では85年歴史があります。今は三代目が経営します。陳石城は伝統から現代に変革しています。" ,
        tags: ["UI/UX","Graphic Design","Package Design"],
        date: "2018 - 2019",
        images: ["./assets/gallery14_fig02.webp","./assets/gallery14_fig03.webp","./assets/gallery14_fig04.webp","./assets/gallery14_fig05.webp","./assets/gallery14_fig06.webp","./assets/gallery14_fig07.webp","./assets/gallery14_fig08.webp","./assets/gallery14_fig09.webp"]
    },
    { 
        id: 28, 
        title: "智多利有限公司", 
        image: "./assets/gallery28_fig01.webp", 
        description: "海外商品輸入の貿易株式会社です。" ,
        tags: ["CVI","Graphic Design","Package Design"],
        date: "2017 - 2018",
        images: ["./assets/gallery28_fig02.webp","./assets/gallery28_fig03.webp","./assets/gallery28_fig04.webp","./assets/gallery28_fig05.webp"]
    },
    { 
        id: 15, 
        title: "PUFFBABA", 
        image: "./assets/gallery15_fig01.webp", 
        description: "シングルフャーザーのアンライシャープ委託。" ,
        tags: ["Graphic Design","Package Design","CVI"],
        date: "2017",
        images: ["./assets/gallery15_fig05.webp","./assets/gallery15_fig02.webp","./assets/gallery15_fig03.webp"]
    },
    { 
        id: 16, 
        title: "17GO流行生活館", 
        image: "./assets/gallery16_fig01.webp", 
        description: "主婦向け、安くて実用な商品のアンライシャープ。" ,
        tags: ["UI/UX","CVI"],
        date: "2017",
        images: ["./assets/gallery16_fig02.webp","./assets/gallery16_fig03.webp"]
    },
    { 
        id: 17, 
        title: "T.HIPPO天河馬", 
        image: "./assets/gallery17_fig01.webp", 
        description: "海外発展したいのドリンクバー" ,
        tags: ["Graphic Design"],
        date: "2016",
        images: ["./assets/gallery17_fig02.webp","./assets/gallery17_fig03.webp","./assets/gallery17_fig04.webp","./assets/gallery17_fig05.webp"]
    },
    { 
        id: 18, 
        title: "初本食舖", 
        image: "./assets/gallery18_fig01.webp", 
        description: "色々なかゆを販売するレストラン。オーナは和風好きです。" ,
        tags: ["Graphic Design"],
        date: "2016",
        images: ["./assets/gallery18_fig02.webp","./assets/gallery18_fig03.webp","./assets/gallery18_fig04.webp","./assets/gallery18_fig05.webp"]
    },
    { 
        id: 24, 
        title: "TAIYAKI鯛餡本舖", 
        image: "./assets/gallery24_fig01.webp", 
        description: "鯛焼きを売る店。" ,
        tags: ["Graphic Design"],
        date: "2016",
        images: ["./assets/gallery24_fig02.webp","./assets/gallery24_fig03.webp"]
    },
    { 
        id: 27, 
        title: "拾覚", 
        image: "./assets/gallery27_fig01.webp", 
        description: "大学生の中大人気の和風果物ドリンクバー。" ,
        tags: ["Graphic Design","Package Design"],
        date: "2016",
        images: ["./assets/gallery27_fig02.webp","./assets/gallery27_fig03.webp"]
    },
    { 
        id: 19, 
        title: "貝司堡", 
        image: "./assets/gallery19_fig01.webp", 
        description: "洋式朝ご飯を売る店。店長はバスケットボール大好きです。" ,
        tags: ["Graphic Design"],
        date: "2015",
        images: ["./assets/gallery19_fig02.webp","./assets/gallery19_fig03.webp","./assets/gallery19_fig04.webp"]
    },
    { 
        id: 20, 
        title: "SteakTogo外帶食牛", 
        image: "./assets/gallery20_fig01.webp", 
        description: "ステーキを売るレストラン。" ,
        tags: ["Graphic Design"],
        date: "2015",
        images: ["./assets/gallery20_fig02.webp","./assets/gallery20_fig03.webp","./assets/gallery20_fig04.webp","./assets/gallery20_fig05.webp"]
    },
    { 
        id: 23, 
        title: "香檸貝克", 
        image: "./assets/gallery23_fig01.webp", 
        description: "可愛いスタイルのドーナツお店です。" ,
        tags: ["Graphic Design","Package Design"],
        date: "2015",
        images: ["./assets/gallery23_fig02.webp","./assets/gallery23_fig03.webp","./assets/gallery23_fig04.webp","./assets/gallery23_fig05.webp"]
    },
    { 
        id: 25, 
        title: "古月茶飲", 
        image: "./assets/gallery25_fig01.webp", 
        description: "この店は大人気観光地「指南宮」隣にいる、「聖茶」を売る。" ,
        tags: ["Graphic Design","Package Design"],
        date: "2015",
        images: ["./assets/gallery25_fig02.webp"]
    },
    { 
        id: 26, 
        title: "台中黃記鵝肉", 
        image: "./assets/gallery26_fig01.webp", 
        description: "台中で大人気40年老舗です。。" ,
        tags: ["UI/UX","Graphic Design","Package Design"],
        date: "2015",
        images: ["./assets/gallery26_fig02.webp","./assets/gallery26_fig03.webp"]
    },
    { 
        id: 22, 
        title: "郁香津企業社", 
        image: "./assets/gallery22_fig01.webp", 
        description: "台湾茶とお土産を売る店。" ,
        tags: ["CVI","Graphic Design","Package Design"],
        date: "2014",
        images: ["./assets/gallery22_fig02.webp"]
    },
    { 
        id: 21, 
        title: "CABI喀比", 
        image: "./assets/gallery21_fig01.webp", 
        description: "コーヒーと洋食を売るレストラン。" ,
        tags: ["Graphic Design"],
        date: "2014",
        images: ["./assets/gallery21_fig02.webp"]
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