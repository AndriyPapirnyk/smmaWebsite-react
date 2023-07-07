import './Home.css';
import Wave from './Wave/Wave';
import Header from '../Header/Header';
// import illustration from './img/illustration.png'
import illustration from './img/o.png';

function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <Header/>
        <Wave />
        <div className="home__main">
          <div className="home__main-text">
          <h1>Buzzify: Ignite, Engage, and Elevate <br /> Your Social Media Success</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam error dignissimos quibusdam libero accusantium. <br /> Temporibus perspiciatis, aut officia quaerat aliquam <br /> maxime, dolorum ut nisi obcaecati voluptatibus</p>
          <button>See More</button>
          </div>
          <img src={illustration} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
