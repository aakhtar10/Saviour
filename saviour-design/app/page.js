// app/page.js

import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import RoadMap from './components/RoadMap';
import './globals.css';
import QusAns from './components/f&q';
import IDO from './components/ido';
import Tokenomic from './components/tokenomic';
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Intro/>
      <IDO/>
      <Tokenomic/>
      <RoadMap/>
      <QusAns/>
      <Footer/>
    </main>
  );
}
