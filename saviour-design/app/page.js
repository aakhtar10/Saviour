// app/page.js
import { FaQq } from 'react-icons/fa';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import RoadMap from './components/RoadMap';
import './globals.css';
import QusAns from './components/f&q';
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Intro/>
      <RoadMap/>
      <QusAns/>
      <Footer/>
    </main>
  );
}
