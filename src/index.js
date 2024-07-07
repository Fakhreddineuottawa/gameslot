import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './style.css';

// Header Component
const Header = () => (
    <header className="header">
        <h1>GameSlot</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </nav>
    </header>
);

// SearchBar Component
const SearchBar = ({ onSearch }) => (
    <input type="text" placeholder="Search for games and articles by title" onChange={onSearch} className="search-bar" />
);

// GameCard Component
const GameCard = ({ game }) => (
    <div className="game-card">
        <img src={game.image} alt={game.title} className="game-image" />
        <h2>{game.title}</h2>
        <p>Price: ${game.price}</p>
        <Link to={`/game/${game.id}`} className="related-articles">Related articles</Link>
        <button className="buy-button">Buy</button>
    </div>
);

// GameList Component
const GameList = ({ games }) => (
    <div className="game-list">
        {games.map(game => <GameCard key={game.id} game={game} />)}
    </div>
);

// GameDetail Component
const GameDetail = ({ games }) => {
    const { id } = useParams();
    const game = games.find(game => game.id === id);

    return (
        <div className="game-detail">
            <h2>{game.title}</h2>
            <img src={game.image} alt={game.title} className="game-detail-image" />
            <p>{game.description}</p>
            <p>Price: ${game.price}</p>
            <button className="buy-button">Buy</button>
        </div>
    );
};

// ArticleDetail Component
const ArticleDetail = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find(article => article.id === id);

    return (
        <div className="article-detail">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
};

// Checkout Component
const Checkout = () => (
    <div className="checkout">
        <h1>Checkout</h1>
        <div>
            <p>Original Price: $XXX</p>
            <p>Discount: $XX</p>
            <p>Final Price: $XXX</p>
        </div>
        <button className="next-button">Next</button>
    </div>
);

// NewsSection Component
const NewsSection = () => (
    <section className="news-section">
        <h2>Actualités Du "Gaming" Au Monde</h2>
        <p>Êtes vous intéressé par les nouveautés du Gaming? Vous êtes au bon endroit.</p>
        <div className="news-item">
            <img src="path/to/image.jpg" alt="News" className="news-image" />
            <div className="news-content">
                <h3>Nouveaux jeux</h3>
                <p>Infinity met à votre disposition ces trois jeux.</p>
                <ul>
                    <li>Fifa 2023</li>
                    <li>God Of War Ragnarok</li>
                    <li>F1 car</li>
                </ul>
            </div>
        </div>
    </section>
);

// ContactSection Component
const ContactSection = () => (
    <footer className="contact-section">
        <h2>Contact</h2>
        <p>Téléphone: +1(123)-4567-9101</p>
        <p>Email: e-gaming@infinity.com</p>
        <p>Adresse: 52 infinity street, Ottawa, Canada L5K 4S9</p>
    </footer>
);

// Home Component
const Home = ({ games, articles }) => (
    <div>
        <GameList games={games} />
        <NewsSection />
        <ContactSection />
    </div>
);

// Main App Component
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
                <Route path="/" element={<Home games={games} articles={articles} />} />
                <Route path="/game/:id" element={<GameDetail games={games} />} />
                <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
