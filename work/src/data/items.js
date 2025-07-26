const items = [
    { 
        id: 1, 
        title: "大手ITインフラ・セキュリティ領域企業 M社", 
        image: "./assets/gallery01_fig01.webp", 
        description: "情報セキュリティサービスやネットワーク構築、DX支援などを提供する企業のコーポレートサイトにおいて、サイトのリニューアルおよび更新・運用に従事。HTML/CSS/JavaScriptを用いたUIの再設計、ページ構成の見直し、動線改善、保守対応など幅広く担当しました。" ,
        tags: ["Html", "Css", "Coding","JavaScript","レスポンシブ対応"],
        date: "2023.04 - 2024.04",
        links: [
            { label: "https://www.mind.co.jp/", url: "https://www.mind.co.jp/" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（再構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Figma"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
            list: [
                { text: "MIND (以下サブページアリアを表示)", url: "https://www.mind.co.jp/"},
                { text: "イベント・セミナー", url: "https://www.mind.co.jp/event/index.html"},
                { text: "大人気の港さんがMIND 5のソリューションストーリー", url: "https://www.mind.co.jp/focus/index.html" },
                { text: "お役立ち情報", url: "https://www.mind.co.jp/useful/index.html" } // 沒有超連結的條目=url:null
            ]
        }
    },
    { 
        id: 2, 
        title: "大手IT通信業界 I社", 
        image: "./assets/gallery02_fig01.webp", 
        description: "企業向けインターネット接続サービスやクラウドサービスなどを提供するIT企業のコーポレートサイトの更新・運用に携わりました。  デザイン調整や画像修正、ページ追加に伴うコーディング（HTML/CSS/JavaScript）を担当。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成","レスポンシブ対応"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.iij.ad.jp/", url: "https://www.iij.ad.jp/" }
          ],
        images: ["./assets/gallery02_fig02.webp", "./assets/gallery02_fig03.webp", "./assets/gallery02_fig04.webp", "./assets/gallery02_fig05.webp","./assets/gallery02_fig06.webp", "./assets/gallery02_fig07.webp", "./assets/gallery02_fig08.webp"],
        details: {
            overview: "サイトの企画、提案,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
            list: [
              { text: "IIJ IoTサービス（サブページ含む）", url: "https://www.iij.ad.jp/biz/iot/"},
              { text: "IIJ LoRaWAN®ソリューション（サブページ含む）", url: "https://www.iij.ad.jp/biz/lorawan/" },
              { text: "パートナーソリューション（サブページ含む）", url: "https://www.iij.ad.jp/svcsol/partner/solution/" } ,
              { text: "電子@連絡帳の活用状況", url: "https://www.iij.ad.jp/biz/e-note/results.html" } // 沒有超連結的條目=url:null              
            ]
        }
    },
    { 
        id: 4, 
        title: "大手印刷・情報システム企業 M社", 
        image: "./assets/gallery04_fig01.webp", 
        description: "大手印刷・情報システム企業のコーポレートサイト更新案件に参画。印刷システムや金融向けソリューションを展開するIT企業のWebページで、HTML/CSS/JavaScriptを用いたデザイン修正およびコーディングを担当。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成","レスポンシブ対応"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.musashinet.co.jp/", url: "https://www.musashinet.co.jp/" }
          ],
        images: ["./assets/gallery04_fig02.webp", "./assets/gallery04_fig03.webp", "./assets/gallery04_fig04.webp"],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
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
        title: "広告・印刷系のBtoB企業 M社", 
        image: "./assets/gallery05_fig01.webp", 
        description: "大手印刷・情報システム企業のコーポレートサイト更新案件に参画。印刷システムや金融向けソリューションを展開するIT企業のWebページで、HTML/CSS/JavaScriptを用いたデザイン修正およびコーディングを担当。" ,
        tags: ["Html", "Css", "Coding","JavaScript","UI/UX","レスポンシブ対応"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://www.musashi-ij.co.jp/", url: "https://www.musashi-ij.co.jp/" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Adobe XD"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
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
        title: "趣味系情報メディアサイト", 
        image: "./assets/gallery06_fig01.webp", 
        description: "WordPressのテーマカスタマイズやデザイン調整、HTML/CSS/JavaScript/PHPによるコーディングのほか、記事コンテンツの更新・保守対応にも従事。 " ,
        tags: ["Html", "Css", "Coding","JavaScript","Wordpress","図版作成","UI/UX","レスポンシブ対応"],
        date: "2021.07 - 2024.12",
        links: [
            { label: "https://tsuriasobi.net/", url: "https://tsuriasobi.net/" }
          ],
        images: ["./assets/gallery06_fig02.webp", "./assets/gallery06_fig03.webp"],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Wordpress"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Figma"},
                {text: "Adobe XD"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScript・PHPコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
            list: [
              {text: "「さくらちゃんが１本のサオで自分だけの図鑑作りに挑戦！」に関するアリア", url:"https://tsuriasobi.net/"},
              { text: "魚の図鑑", url: "https://tsuriasobi.net/dictionary/" },
              { text: "魚の料理方法", url: "https://tsuriasobi.net/#cook" },
              {text: "釣りのトラブルシューティングと準備", url: "https://tsuriasobi.net/#howto"},
              { text: "魚の種類別・ルアー釣り入門", url: "https://tsuriasobi.net/#lure" }
            ]
        }
    },
    { 
        id: 13, 
        title: "工業資材メーカー系企業 K社", 
        image: "./assets/gallery13_fig01.webp", 
        description: "工業資材を取り扱うBtoBメーカー企業のコーポレートサイトを新規構築。企業イメージの刷新と情報整理を目的とし、トップページから製品情報ページまで一貫してデザインおよび実装を担当。 " ,
        tags: ["Html", "Css", "Coding","JavaScript","Wordpress","UI/UX","レスポンシブ対応"],
        date: "2023.05 - 2024.12",
        links: [
            { label: "https://www.kbjapan.co.jp/jpn", url: "https://www.kbjapan.co.jp/jpn" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Wordpress"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Figma"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScript・PHPコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
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
        title: "大手エンタメグループの採用情報ページ", 
        image: "./assets/gallery11_fig01.webp", 
        description: "大手エンタメグループの採用情報ページ制作において、Figma上の一部下層ページのレイアウト調整およびHTML/CSSによる実装、テキスト修正作業を担当。" ,
        tags: ["Html", "Css", "Coding","JavaScript","レスポンシブ対応"],
        date: "2023.07 - 2024.11",
        links: [
            { label: "https://www.segasammy.co.jp/ja/recruit/", url: "https://www.segasammy.co.jp/ja/recruit/" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Figma"}
            ],
            intro: [
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"}
            ],
            list: [
              {text: "企業内大学「セガサミーカレッジ」の設立と取り組み", url: "https://www.segasammy.co.jp/ja/recruit/project/college.html"},
              { text: "人を知る（サブページ含む）", url: "https://www.segasammy.co.jp/ja/recruit/people/" },
              { text: "座談会から社風を知る ～若手社員編～（他の座談会ページ含む）", url: "https://www.segasammy.co.jp/ja/recruit/crosstalk/crosstalk01.html" }
            ]
        }
    },
    { 
        id: 8, 
        title: "物流グループ関連会社 D社", 
        image: "./assets/gallery08_fig01.webp", 
        description: "物流グループ関連会社のWebサイトにおいて、継続的なメンテナンス・運用業務に従事。HTML/CSS/JavaScriptによるページ修正やレイアウト調整、画像更新を通じて、サイトの利便性と鮮度の維持に貢献しました。" ,
        tags: ["Html", "Css", "Coding","JavaScript","レスポンシブ対応"],
        date: "2023.05 - 2024.11",
        links: [
            { label: " https://daido-grp.com/", url: " https://daido-grp.com/" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"}
            ],
            intro: [
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像制作"}
            ]
        }
    },
    { 
        id: 9, 
        title: "インターナショナル保育施設サイト", 
        image: "./assets/gallery09_fig01.webp", 
        description: "園の特色や保育方針を伝えるWebサイトの更新業務・コンテンツ改修などを担当しました。WordPressを用いたサイトカスタマイズ、HTML/CSS/JavaScriptによるコーディング、UI調整、画像作成・保守対応を行いました。" ,
        tags: ["Html", "Css", "Coding","JavaScript","Wordpress","図版作成","UI/UX","レスポンシブ対応"],
        date: "2021.07 - 2024.04",
        links: [
            { label: "https://www.gglobal.jp/", url: "https://www.gglobal.jp/" }
          ],
        images: ["./assets/gallery09_fig02.webp", "./assets/gallery09_fig03.webp","./assets/gallery09_fig04.webp", "./assets/gallery09_fig05.webp","./assets/gallery09_fig06.webp", "./assets/gallery09_fig07.webp","./assets/gallery09_fig08.webp"],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Wordpress"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Adobe XD"}
            ],
            intro: [
                {text: "サブページ制作"},
                {text: "HTML・CSS・JavaScript・PHPコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
            list: [
              {text: "サイト全体", url: "https://www.gglobal.jp/"},
            ]
        }
    },
    { 
        id: 10, 
        title: "専門診療科LPサイト新規制作", 
        image: "./assets/gallery10_fig01.webp", 
        description: "患者向けに特定診療科の概要、診療フロー、アクセス情報などを掲載したLPを新規制作。HTML/CSS/JavaScriptによるコーディング、UI設計や画像制作、SEOを考慮した構成提案などを担当。" ,
        tags: ["Html", "Css", "Coding","JavaScript","図版作成","UI/UX","レスポンシブ対応"],
        date: "2023.12",
        images: ["./assets/gallery10_fig02.webp"],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Adobe XD"}
            ],
            intro: [
                {text: "ページ制作"},
                {text: "UI/UX設計"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"}
            ],
            list: [
              {text: "該サイトは現在非公開となっております。", url: null},
            ]
        }
    },
    { 
        id: 7, 
        title: "レンタカー事業サイト", 
        image: "./assets/gallery07_fig01.webp", 
        description: "グループ傘下のレンタカーサービスの紹介サイトを新規構築。サービス訴求と信頼感の伝達を目的とし、ユーザーが使いやすい設計・導線を意識したデザインを担当。PC/スマホ両対応のレスポンシブ設計に加え、HTML/CSS/JavaScriptを用いたコーディングも実施。 " ,
        tags: ["Html", "Css", "Coding","JavaScript","UI/UX","LP","レスポンシブ対応"],
        date: "2023.05",
        links: [
            { label: "https://www.daidohr.com/", url: "https://www.daidohr.com/" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Adobe XD"}
            ],
            intro: [
                {text: "ページ制作"},
                {text: "UI/UX設計"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"},
                {text: "更新・保守対応"}
            ],
            list: [
              {text: "サイト全体", url: "https://www.daidohr.com/"},
            ]
        }  
    }, 
    { 
        id: 3, 
        title: "医療法人グループ所属医師のLPサイト", 
        image: "./assets/gallery03_fig01.webp", 
        description: "医療法人グループに所属する現役医師の個人向け紹介サイトを新規構築。患者向けに医師の専門分野や診療理念、インタビュー記事などを紹介するサイトで、HTML/CSS/JavaScriptによる静的コーディングに加え、UI設計やSEOを考慮した情報設計も担当しました。 " ,
        tags: ["Html", "Css", "Coding","LP","UI/UX","レスポンシブ対応"],
        date: "2023.05",
        links: [
            { label: "https://medicalnote-doctor-okumura.jp/", url: "https://medicalnote-doctor-okumura.jp/" }
        ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "Visual Studio Code"},
                {text: "Adobe XD"}
            ],
            intro: [
                {text: "ページ制作"},
                {text: "UI/UX設計"},
                {text: "HTML・CSS・JavaScriptコーディング"},
                {text: "画像,バナー制作"}
            ],
            list: [
              {text: "サイト全体", url: "https://medicalnote-doctor-okumura.jp/"},
            ]
        }
    }, 
    { 
        id: 12, 
        title: "医療系企業の啓発サイト", 
        image: "./assets/gallery12_fig01.webp", 
        description: "ニキビに関する情報を発信する、医療系クライアントの啓発サイトにて、思春期から成人期までの原因や治療法を紹介するWebコンテンツの更新業務に携わりました。" ,
        tags: ["Html", "Css", "Coding","JavaScript","レスポンシブ対応"],
        date: "2021.11 - 2022.11",
        links: [
            { label: "https://www.maruho.co.jp/kanja/nikibi/", url: "https://www.maruho.co.jp/kanja/nikibi/" }
          ],
        details: {
            overview: "サイトの要件定義と企画提案（ワイヤーフレーム作成、サイトマップ設計）,サイトの制作（構築、設計、デザイン、コーディング）,メンテナンス業務",
            environmentList: [
                {text: "HTML/CSS"},
                {text: "JavaScript"},
                {text: "Visual Studio Code"}
            ],
            intro: [
                {text: "ページ制作"},
                {text: "HTML・CSS・JavaScriptコーディング"},                
                {text: "更新・保守対応"}
            ],
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
        images: ["./assets/gallery14_fig02.webp","./assets/gallery14_fig03.webp","./assets/gallery14_fig04.webp","./assets/gallery14_fig05.webp","./assets/gallery14_fig06.webp","./assets/gallery14_fig07.webp","./assets/gallery14_fig08.webp","./assets/gallery14_fig09.webp"],
        details: {
            overview: "販促物、Webバナー、食品パッケージ、大型サインの制作を一人で担当。DTP業務も含め、実制作を幅広く対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "パッケージデザイン"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"},                
                {text: "Webバナー制作"},
                {text: "DTP業務"},
                {text: "サイト全体のビジュアルトーン定義"}
            ]
        }
    },
    { 
        id: 28, 
        title: "智多利有限公司", 
        image: "./assets/gallery28_fig01.webp", 
        description: "海外商品輸入の貿易株式会社です。" ,
        tags: ["CI","VI","Graphic Design","Package Design"],
        date: "2017 - 2018",
        images: ["./assets/gallery28_fig02.webp","./assets/gallery28_fig03.webp","./assets/gallery28_fig04.webp","./assets/gallery28_fig05.webp"],
        details: {
            overview: "販促物、Webバナー、商品パッケージを一人で担当。DTP業務も含め、実制作を幅広く対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"},
                {text: "Adobe Lightroom"}
            ],
            intro: [
                {text: "パッケージデザイン"},               
                {text: "Webバナー制作"},
                {text: "CI策定およびVI設計に携わりました"},
                {text: "商品写真撮影"}
            ]
        }
    },
    { 
        id: 15, 
        title: "PUFFBABA", 
        image: "./assets/gallery15_fig01.webp", 
        description: "シングルフャーザーのアンライシャープ委託。" ,
        tags: ["Graphic Design","Package Design","CI","VI"],
        date: "2017",
        images: ["./assets/gallery15_fig05.webp","./assets/gallery15_fig02.webp","./assets/gallery15_fig03.webp"],
        details: {
            overview: "CI、VI、商品パッケージを担当。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "パッケージデザイン"}, 
                {text: "CI策定およびVI設計に携わりました"}
            ]
        }
    },
    { 
        id: 16, 
        title: "17GO流行生活館", 
        image: "./assets/gallery16_fig01.webp", 
        description: "主婦向け、安くて実用な商品のアンライシャープ。" ,
        tags: ["UI/UX","CI","VI"],
        date: "2017",
        images: ["./assets/gallery16_fig02.webp","./assets/gallery16_fig03.webp"],
        details: {
            overview: "サイト全体のビジュアルトーン定義",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "サイト全体のビジュアルトーン定義"},               
                {text: "Webバナー制作"},
                {text: "CI策定およびVI設計に携わりました"}
            ]
        }
    },
    { 
        id: 17, 
        title: "T.HIPPO天河馬", 
        image: "./assets/gallery17_fig01.webp", 
        description: "海外発展したいのドリンクバー" ,
        tags: ["Graphic Design"],
        date: "2016",
        images: ["./assets/gallery17_fig02.webp","./assets/gallery17_fig03.webp","./assets/gallery17_fig04.webp","./assets/gallery17_fig05.webp"],
        details: {
            overview: "販促物、食品パッケージ、大型サインの制作を担当。DTP業務も含め、実制作を幅広く対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "パッケージデザイン"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"},                
                {text: "DTP業務"}
            ]
        }
    },
    { 
        id: 18, 
        title: "初本食舖", 
        image: "./assets/gallery18_fig01.webp", 
        description: "色々なかゆを販売するレストラン。オーナは和風好きです。" ,
        tags: ["Graphic Design"],
        date: "2016",
        images: ["./assets/gallery18_fig02.webp","./assets/gallery18_fig03.webp","./assets/gallery18_fig04.webp","./assets/gallery18_fig05.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},                
                {text: "簡易な3Dパースの作成・陳列レイアウトの提案補助"}
            ]
        }
    },
    { 
        id: 24, 
        title: "TAIYAKI鯛餡本舖", 
        image: "./assets/gallery24_fig01.webp", 
        description: "鯛焼きを売る店。" ,
        tags: ["Graphic Design","VI"],
        date: "2016",
        images: ["./assets/gallery24_fig02.webp","./assets/gallery24_fig03.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},                
                {text: "簡易な3Dパースの作成・陳列レイアウトの提案補助"}
            ]
        }
    },
    { 
        id: 27, 
        title: "拾覚", 
        image: "./assets/gallery27_fig01.webp", 
        description: "大学生の中大人気の和風果物ドリンクバー。" ,
        tags: ["Graphic Design","Package Design"],
        date: "2016",
        images: ["./assets/gallery27_fig02.webp","./assets/gallery27_fig03.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"},
                {text: "InDesign"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},                
                {text: "簡易な3Dパースの作成・陳列レイアウトの提案補助"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"}
            ]
        }
    },
    { 
        id: 19, 
        title: "貝司堡", 
        image: "./assets/gallery19_fig01.webp", 
        description: "洋式朝ご飯を売る店。店長はバスケットボール大好きです。" ,
        tags: ["Graphic Design"],
        date: "2015",
        images: ["./assets/gallery19_fig02.webp","./assets/gallery19_fig03.webp","./assets/gallery19_fig04.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"}
            ]
        }
    },
    { 
        id: 20, 
        title: "SteakTogo外帶食牛", 
        image: "./assets/gallery20_fig01.webp", 
        description: "ステーキを売るレストラン。" ,
        tags: ["Graphic Design"],
        date: "2015",
        images: ["./assets/gallery20_fig02.webp","./assets/gallery20_fig03.webp","./assets/gallery20_fig04.webp","./assets/gallery20_fig05.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"}, 
                {text: "簡易な3Dパースの作成・陳列レイアウトの提案補助"}
            ]
        }
    },
    { 
        id: 23, 
        title: "香檸貝克", 
        image: "./assets/gallery23_fig01.webp", 
        description: "可愛いスタイルのドーナツお店です。" ,
        tags: ["Graphic Design","Package Design"],
        date: "2015",
        images: ["./assets/gallery23_fig02.webp","./assets/gallery23_fig03.webp","./assets/gallery23_fig04.webp","./assets/gallery23_fig05.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"}, 
                {text: "簡易な3Dパースの作成・陳列レイアウトの提案補助"}
            ]
        }
    },
    { 
        id: 25, 
        title: "古月茶飲", 
        image: "./assets/gallery25_fig01.webp", 
        description: "この店は大人気観光地「指南宮」隣にいる、「聖茶」を売る。" ,
        tags: ["Graphic Design","Package Design"],
        date: "2015",
        images: ["./assets/gallery25_fig02.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"}
            ]
        }
    },
    { 
        id: 26, 
        title: "台中黃記鵝肉", 
        image: "./assets/gallery26_fig01.webp", 
        description: "台中で大人気40年老舗です。" ,
        tags: ["UI/UX","Graphic Design","Package Design"],
        date: "2015",
        images: ["./assets/gallery26_fig02.webp","./assets/gallery26_fig03.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"},
                {text: "大判印刷（ターポリン・ポスタースタンド）"}, 
                {text: "簡易な3Dパースの作成・陳列レイアウトの提案補助"},
                {text: "サイト全体のビジュアルトーン定義"}
            ]
        }
    },
    { 
        id: 22, 
        title: "郁香津企業社", 
        image: "./assets/gallery22_fig01.webp", 
        description: "台湾茶とお土産を売る店。" ,
        tags: ["CI","Graphic Design","Package Design"],
        date: "2014",
        images: ["./assets/gallery22_fig02.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"}
            ]
        }
    },
    { 
        id: 21, 
        title: "CABI喀比", 
        image: "./assets/gallery21_fig01.webp", 
        description: "コーヒーと洋食を売るレストラン。" ,
        tags: ["Graphic Design"],
        date: "2014",
        images: ["./assets/gallery21_fig02.webp"],
        details: {
            overview: "食品パッケージ、販促用の印刷物（チラシ・ポスター・パンフレットなど）の制作を担当。納品まで一貫して対応しました。",
            environmentList: [
                {text: "Photoshop"},
                {text: "Illustrator"}
            ],
            intro: [
                {text: "食品パッケージ、販促用の印刷物デザイン"}
            ]
        }
    },
  ];

  export default items;