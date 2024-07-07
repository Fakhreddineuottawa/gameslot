import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import ArticleDetail from './components/ArticleDetail';
import Checkout from './components/Checkout';
import SearchBar from './components/SearchBar';

const App = () => {
    const games = [
        { id: '1', title: 'Game 1', price: 30, image: 'path/to/image1.jpg', description: 'Description of Game 1' },
        { id: '2', title: 'Game 2', price: 40, image: 'path/to/image2.jpg', description: 'Description of Game 2' },
        { id: '3', title: 'Game 3', price: 50, image: 'path/to/image3.jpg', description: 'Description of Game 3' },
    ];

    const articles = [
        { id: '1', title: 'Article 1', content: 'Content of Article 1' },
        { id: '2', title: 'Article 2', content: 'Content of Article 2' },
        { id: '3', title: 'Article 3', content: 'Content of Article 3' },
    ];

    const handleSearch = (e) => {
        console.log(e.target.value);
    };

    return (
        <Router>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<GameList games={games} />} />
                <Route path="/game/:id" element={<GameDetail games={games} />} />
                <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
