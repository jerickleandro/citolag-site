import Banner from '../components/Homepage/Banner';
import Blog from '../components/Homepage/Blog';
import BusinessSolutions from '../components/Homepage/BusinessSolutions';
import Tools from '../components/Homepage/Tools';
import Unidades from '../components/Homepage/Unidades';
import Footer from '../components/footer/Footer';
import Nav2 from '../components/Nav/Nav2';
import '../styles/globals.css';
import '../styles/App.css';
import '../components/Nav/nav2.css';
import '../components/Nav/nav2.css';
import '../components/Homepage/banking-tools.css';
import '../components/Homepage/banner.css';
import '../components/Homepage/solutions.css';
import '../components/footer/footer.css';
import '../components/Homepage/blog.css';
import '../components/footer/footer.css';



export default function Home() {
  return (
    <div className='App'>
      <Nav2 />
      <Banner />
      <Tools />
      <BusinessSolutions />
      <Unidades />
      <Blog />
      <Footer />
    </div>
  );
}
