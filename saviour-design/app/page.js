// app/page.js
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './globals.css';
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Intro/>
    </main>
  );
}
