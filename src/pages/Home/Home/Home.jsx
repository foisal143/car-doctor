import Slider from '../Slider/Slider';
import About from '../About/About';
import Service from '../Service/Service';
import ContactInfo from '../ContactInfo/ContactInfo';
import Products from '../Products/Products';
import Team from '../Team/Team';
import CoreFetures from '../CoreFetures/CoreFetures';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className="mt-12">
      <Slider></Slider>
      <About></About>
      <Service></Service>
      <ContactInfo></ContactInfo>
      <Products />
      <Team></Team>
      <CoreFetures></CoreFetures>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
