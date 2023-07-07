import './Services.css';
import ServiceCard from './ServiceCard/ServiceCard';
import smmIcon from './img/smm.png'
import tiktokIcon from './img/tiktok.png';
import instagramIcon from './img/instagram.png';
import youtubeIcon from './img/youtube.png';
import facebookIcon from './img/facebook.png';
import amazonIcon from './img/amazon.png';






const serviceList = [
  {
    width: '49.5%',
    heading: '01. SMM',
    desciption: 'Lorem  ',
    icon: smmIcon
  },
  {
    width: '49.5%',
    heading: '02. TikTok',
    desciption: 'Lorem',
    icon: tiktokIcon
  },
  {
    width: '49.5%',
    heading: '03. Instagram',
    desciption: 'Lorem',
    icon: instagramIcon
  },
  {
    width: '49.5%',
    heading: '04. YouTube ',
    desciption: 'Lorem',
    icon: youtubeIcon
  },
  {
    width: '49.5%',
    heading: '05. Facebook',
    desciption: 'Lorem',
    icon: facebookIcon
  },
  {
    width: '49.5%',
    heading: '06. Amazon',
    desciption: 'Lorem',
    icon: amazonIcon
  },
]

function Service() {
  return (
    <section className="service">
      <div className="service__container">
        <h1 className='service__heading'><span>O</span>ur <span>Service</span></h1>
        <div className="service__main">
          {serviceList.map(item => <ServiceCard key={item.heading} width={item.width} heading={item.heading} desciption={item.desciption} icon={item.icon} />)}
        </div>
      </div>
    </section>
  );
}

export default Service;
