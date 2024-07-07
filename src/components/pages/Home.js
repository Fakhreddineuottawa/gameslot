import React from 'react';
import GameList from '../components/GameList';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';

const Home = ({ games }) => (
    <div>
        <GameList games={games} />
        <NewsSection />
        <ContactSection />
    </div>
);

export default Home;
