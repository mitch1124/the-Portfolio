import ArticleCard from './ArticleCard';
import { ArrowRight } from "lucide-react";

const articles = [
  {
    date: 'Apr 10, 2025',
    title: 'Real Estate Application',
    content: 'Real Estate application that I created for my final project.',
    link: 'https://github.com/Ensign-College/CS115-Lab-i-RealEstate-mitch1124.git',
  },
  {
    date: 'May 31, 2025',
    title: 'Luggage Management Application',
    content: 'Created stack and queue lugage management helper!',
    link: 'https://github.com/Ensign-College/4-4-cc-custom-stack-and-queue-for-luggage-management-mitch1124.git',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-8 pb-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few of my recent projects. 
        </p>

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

        <div className="text-center mt-12">
          <a
            className="nym-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mitch1124"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
