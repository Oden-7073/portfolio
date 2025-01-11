import PropTypes from "prop-types"; // 引入 PropTypes
import '../styles/style.scss';

function Modal({ item, onClose }) {
  if (!item) return null; // 如果沒有選擇的項目，則不渲染模態框

  return (
    <div className="l-modal" onClick={onClose}>
      <div className="l-modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="mb_20" src={item.image} alt={item.title} />
        <p className="date mb_10">{item.date}</p>
        <h2 className="l-modal-content-ttl mb_20">{item.title}</h2>
        <div className="tags mb_30">
            {item.tags.map((tag, index) => (
                <span key={index} className="tags_tag">{tag}</span>
            ))}
        </div>
        {/* 顯示url */}
        {item.links && item.links.length > 0 && (
          <div className="l-modal-content-links mb_30">
            {item.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
        {/* 顯示描述 */}
        <p className="mb_30">{item.description}</p>
        
        {/* 顯示詳細內容 */}
        {item.details && (
          <div className="l-modal-content-details">
            <p className="l-modal-content-details-intro">{item.details.intro}</p>
            <ul className="l-modal-content-details-list">
              {item.details.list.map((detail, index) => (
                <li key={index}>
                  {detail.url ? (
                    <a href={detail.url} target="_blank" rel="noopener noreferrer">
                      {detail.text}
                    </a>
                  ) : (
                    detail.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 顯示其他圖片 */}
        {item.images && item.images.length > 0 && (
          <div className="additional-images">
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index + 1}`} />
            ))}
          </div>
        )}
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
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
        intro: PropTypes.string,
        list: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
            url: PropTypes.string,
          })
        )
      }),
    }),
    onClose: PropTypes.func.isRequired, // onClose 必要
  };
export default Modal;
