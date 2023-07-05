import './Home.css';
import Wave from './Wave/Wave';
import illustration from './img/illustration.png'

function Home() {
  return (
    <section className="home">
      <div className="home__container">
      <Wave />
      </div>
    </section>
  );
}

export default Home;
