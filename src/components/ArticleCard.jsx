import '@/index.css';
import PropTypes from 'prop-types';

const articles = [
  {
    date: 'Apr 10, 2025',
    title: 'Real Estate Application',
    content:
      'Real Estate application that I created for my final project.',
    link: 'https://github.com/Ensign-College/CS115-Lab-i-RealEstate-mitch1124.git',
  },
  {
    date: 'Sep 2, 2020',
    title: 'The Missing Introduction to React',
    content:
      'Blehh brothas',
    link: 'https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76',
  },
];

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article data-testid={'articleCard'} className="article-card">
      <div className="article-card-header">
        <time data-testid={'articleCardDate'}>{date}</time>
        <h2 data-testid={'articleCardTitle'}>{title}</h2>
      </div>
      <p data-testid={'articleCardContent'}>{content}</p>
      <a href={link} data-testid={'articleCardLink'}>
        View Repo
      </a>
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

// ⬇️ This component will render ALL articles
const ArticleList = () => {
  return (
    <div className="articles">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          date={article.date}
          title={article.title}
          content={article.content}
          link={article.link}
        />
      ))}
    </div>
  );
};

export default ArticleList;
