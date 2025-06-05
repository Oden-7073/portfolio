// components/DetailSection.jsx
import PropTypes from "prop-types";

function DetailSection({ title, list, withLink = false, className = "mb_30" }) {
  if (!Array.isArray(list) || list.length === 0) return null;

  return (
    <div className={className}>
      <h3>{title}</h3>
      <ul className="l-modal-content-details-list">
        {list.map((item, index) => (
          <li key={index}>
            {withLink && item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

DetailSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ),
  withLink: PropTypes.bool,
  className: PropTypes.string,
};

export default DetailSection;