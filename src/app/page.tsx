"use client";


import About from './components/About';
import Hero from './components/Hero';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

export default function Home() {
	return (
		<>
				<Header />
				<Hero />
				<About />
				<br />
				<br />
				
				<Footer />
				</>
	);
}
