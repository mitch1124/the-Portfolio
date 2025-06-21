import '@/index.css';

export const Footer = () => {
  const footerLinks = [
    { title: "GitHub", url: "https://github.com/mitch1124" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/mitchell-lindsey-2755a3206/" }
  ];

  return (
    <footer data-testid="footer" className="footer">
      <ul>
        {footerLinks.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>

      <p data-testid="footerContent"> #LGM </p>
    </footer>
  );
};

