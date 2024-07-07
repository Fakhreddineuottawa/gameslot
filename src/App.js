import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import ArticleDetail from './components/ArticleDetail';
import Checkout from './components/Checkout';

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/game/:id" element={<GameDetail />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
);

export default App;
