import PropTypes from 'prop-types';
import '@/index.css';

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article className="article-card">
      <div className="article-card-header">
        <time>{date}</time>
        <h2>{title}</h2>
      </div>
      <p>{content}</p>
      <div className="pt-4">
        <a href={link} className="nym-button">
          View My Work
        </a>
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: '#',
};

export default ArticleCard;
