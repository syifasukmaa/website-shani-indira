'use client';
import Header from '@/components/organisms/Header';
import Navbar from '@/components/organisms/Navbar';
import Profile from '@/components/organisms/Profile';
import About from '@/components/organisms/About';
import Single from '@/components/organisms/Single';
import Sousenkyo from '@/components/organisms/Sousenkyo';
import Footer from '@/components/organisms/Footer';
import Game from '@/components/organisms/Game';
import ButtonUp from '@/components/atoms/Button/ButtonUp';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Profile />
      <Game />
      <About />
      <Sousenkyo />
      <Single />
      <Footer />
      <ButtonUp />
    </>
  );
}
