import PropTypes from "prop-types"; // 引入 PropTypes
import { useState } from "react"; // 引入 useState
import DetailSection from "./DetailSection"; // 引入DetailSection
import "../styles/style.scss";

function Modal({ item, onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null); // 用於存放當前放大的圖片 URL

  // 處理圖片點擊放大
  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  // 關閉放大圖片
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  if (!item) return null; // 如果沒有選擇的項目，則不渲染模態框

  return (
    <>
      {/* 主模態框 */}
      <div className="l-modal" onClick={onClose}>
        <div className="l-modal-content" onClick={(e) => e.stopPropagation()}>
          <img
            className="mb_20"
            src={item.image}
            alt={item.title}
            onClick={() => handleImageClick(item.image)}
          />
          <p className="date mb_10">{item.date}</p>
          <h2 className="l-modal-content-ttl mb_20">{item.title}</h2>
          <div className="tags mb_30">
            {item.tags.map((tag, index) => (
              <span key={index} className="tags_tag">
                {tag}
              </span>
            ))}
          </div>
          {/* 顯示 URL */}
          {item.links && item.links.length > 0 && (
            <div className="l-modal-content-links mb_30">
              {item.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {/* 顯示描述 */}
          <p className="mb_30">{item.description}</p>

          {/* 顯示詳細內容 */}
          <div className="l-modal-content-details">
            {item.details?.overview && (
              <>
                <h3>業務内容</h3>
                <p className="l-modal-content-details-intro">{item.details.overview}</p>
              </>
            )}
            <DetailSection
              title="制作環境"
              list={item.details.environmentList}
            />
            <DetailSection
              title="担当フェーズ"
              list={item.details.intro}
            />
            <DetailSection
              title="制作実績"
              list={item.details.list}
              withLink
            />
          </div>
          

          {/* 顯示其他圖片 */}
          {item.images && item.images.length > 0 && (
            <div className="additional-images">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Additional ${index + 1}`}
                  onClick={() => handleImageClick(image)} // 點擊放大
                />
              ))}
            </div>
          )}

          <button onClick={onClose}>Close</button>
        </div>
      </div>

      {/* 放大圖片模態框 */}
      {zoomedImage && (
        <div className="l-zoomed-modal" onClick={closeZoomedImage}>
          <div className="l-zoomed-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage} alt="Zoomed" />
            <button onClick={closeZoomedImage} className="l-zoomed-modal-close">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    images: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.shape({
      overview: PropTypes.string,
      environmentList: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired
        })
      ),
      intro: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired
        })
      ),
      list: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string,
        })
      ),
    }),
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
