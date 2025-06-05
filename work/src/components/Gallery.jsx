import { useState,useEffect } from "react";
import Modal from "./Modal";
import '../styles/style.scss';
import items from "../data/items";



  
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