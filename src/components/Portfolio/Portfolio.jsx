import './Portfolio.css';
import PortfolioSlider from './PortfolioSlider/PortfolioSlider';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h1><span>O</span>ur <span>Portfolio</span></h1>
        <PortfolioSlider/>
      </div>
    </section>
  );
}

export default Portfolio;
