import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
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

// FacetedSearch Component
const FacetedSearch = ({ filters, onFilterChange }) => (
    <div className="faceted-search">
        <h3>Recherche par facette</h3>
        {filters.map((filter, index) => (
            <div key={index} className="filter-category">
                <h4>{filter.name}</h4>
                {filter.options.map((option, idx) => (
                    <div key={idx}>
                        <input
                            type="checkbox"
                            id={`${filter.name}-${option}`}
                            name={filter.name}
                            value={option}
                            onChange={onFilterChange}
                        />
                        <label htmlFor={`${filter.name}-${option}`}>{option}</label>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

// GameCard Component
const GameCard = ({ game, onBuy }) => (
    <div className="game-card">
        <img src={game.image} alt={game.title} className="game-image" />
        <h2>{game.title}</h2>
        <p>Price: ${game.price}</p>
        <Link to={`/game/${game.id}`} className="related-articles">Related articles</Link>
        <button className="buy-button" onClick={() => onBuy(game)}>Buy</button>
    </div>
);

// GameList Component
const GameList = ({ games, onBuy }) => (
    <div className="game-list">
        {games.map(game => <GameCard key={game.id} game={game} onBuy={onBuy} />)}
    </div>
);

// CommentSection Component
const CommentSection = ({ comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment('');
        }
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <div className="comments-list">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment}</p>
                    </div>
                ))}
            </div>
            <div className="comment-form">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                    rows="3"
                />
                <button onClick={handleAddComment}>Submit</button>
            </div>
        </div>
    );
};

// GameDetail Component
const GameDetail = ({ game, comments, onAddComment }) => (
    <div className="game-detail">
        <h2>{game.title}</h2>
        <img src={game.image} alt={game.title} className="game-detail-image" />
        <p>{game.description}</p>
        <p>Price: ${game.price}</p>
        <button className="buy-button">Buy</button>
        <CommentSection comments={comments} onAddComment={onAddComment} />
    </div>
);

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

// Checkout Components
const CheckoutStep1 = ({ game, onNext }) => (
    <div className="checkout">
        <h2>1. Game</h2>
        <div>
            <p>Title: {game.title}</p>
            <p>Original Price: ${game.price}</p>
            <p>Discount: ${game.discount}</p>
            <p>Final Price: ${game.price - game.discount}</p>
        </div>
        <button className="next-button" onClick={onNext}>Next</button>
    </div>
);

const CheckoutStep2 = ({ onNext }) => (
    <div className="checkout">
        <h2>2. Credit Card</h2>
        <div>
            <p>Enter your credit card details:</p>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Expiry Date" />
            <input type="text" placeholder="CVV" />
        </div>
        <button className="next-button" onClick={onNext}>Next</button>
    </div>
);

const CheckoutStep3 = ({ onConfirm }) => (
    <div className="checkout">
        <h2>3. Confirmation</h2>
        <p>Review your details and confirm your purchase.</p>
        <button className="confirm-button" onClick={onConfirm}>Confirm</button>
    </div>
);

// NewsSection Component
const NewsSection = () => (
    <section className="news-section">
        <h2>Actualit&eacute;s Du "Gaming" Au Monde</h2>
        <p>&Ecirc;tes-vous int&eacute;ress&eacute; par les nouveaut&eacute;s du Gaming? Vous &ecirc;tes au bon endroit.</p>
        <div className="news-item">
            <img src="path/to/image.jpg" alt="News" className="news-image" />
            <div className="news-content">
                <h3>Nouveaux jeux</h3>
                <p>Infinity met &agrave; votre disposition ces trois jeux.</p>
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
        <p>T&eacute;l&eacute;phone: +1(123)-4567-9101</p>
        <p>Email: e-gaming@infinity.com</p>
        <p>Adresse: 52 infinity street, Ottawa, Canada L5K 4S9</p>
    </footer>
);

// PromotionsSection Component
const PromotionsSection = ({ games }) => {
    const promotions = games.filter(game => game.price === 0 || game.discount > 0);

    return (
        <section className="promotions-section">
            <h2>Promotions</h2>
            <p>D&eacute;couvrez nos jeux gratuits ou &agrave; prix r&eacute;duit !</p>
            <div className="promotions-list">
                {promotions.map(game => (
                    <div key={game.id} className="promotion-card">
                        <img src={game.image} alt={game.title} className="promotion-image" />
                        <h3>{game.title}</h3>
                        {game.price === 0 ? (
                            <p className="free">Gratuit</p>
                        ) : (
                            <p className="discount">Prix r&eacute;duit: ${game.discount} (Economisez ${game.price - game.discount})</p>
                        )}
                        <button className="buy-button">Buy</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Home Component
const Home = ({ games, articles, onBuy }) => (
    <div>
        <FacetedSearch
            filters={[
                { name: 'Price', options: ['Free', 'Under $20', 'Under $50', 'Above $50'] },
                { name: 'Genre', options: ['Action', 'Adventure', 'RPG', 'Simulation', 'Strategy'] },
            ]}
            onFilterChange={(e) => console.log(e.target.value)}
        />
        <GameList games={games} onBuy={onBuy} />
        <PromotionsSection games={games} />
        <NewsSection />
        <ContactSection />
    </div>
);

// Main App Component
const App = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [comments, setComments] = useState({});
    const [checkoutStep, setCheckoutStep] = useState(1);
    const navigate = useNavigate();

    const games = [
        { id: '1', title: 'Game 1', price: 30, image: 'path/to/image1.jpg', description: 'Description of Game 1', discount: 10 },
        { id: '2', title: 'Game 2', price: 40, image: 'path/to/image2.jpg', description: 'Description of Game 2', discount: 0 },
        { id: '3', title: 'Game 3', price: 50, image: 'path/to/image3.jpg', description: 'Description of Game 3', discount: 20 },
        { id: '4', title: 'Game 4', price: 0, image: 'path/to/image4.jpg', description: 'Description of Game 4', discount: 0 },
    ];

    const articles = [
        { id: '1', title: 'Article 1', content: 'Content of Article 1' },
        { id: '2', title: 'Article 2', content: 'Content of Article 2' },
        { id: '3', title: 'Article 3', content: 'Content of Article 3' },
    ];

    const handleSearch = (e) => {
        console.log(e.target.value);
    };

    const handleBuy = (game) => {
        setSelectedGame(game);
        setCheckoutStep(1);
        navigate('/checkout');
    };

    const handleNextStep = () => {
        setCheckoutStep(checkoutStep + 1);
    };

    const handleConfirm = () => {
        alert('Purchase confirmed!');
        navigate('/');
    };

    const handleAddComment = (gameId, comment) => {
        setComments((prevComments) => ({
            ...prevComments,
            [gameId]: [...(prevComments[gameId] || []), comment],
        }));
    };

    return (
        <Router>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Home games={games} articles={articles} onBuy={handleBuy} />} />
                <Route
                    path="/game/:id"
                    element={
                        <GameDetail
                            game={games.find((game) => game.id === selectedGame?.id)}
                            comments={comments[selectedGame?.id] || []}
                            onAddComment={(comment) => handleAddComment(selectedGame?.id, comment)}
                        />
                    }
                />
                <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
                <Route
                    path="/checkout"
                    element={
                        checkoutStep === 1 ? (
                            <CheckoutStep1 game={selectedGame} onNext={handleNextStep} />
                        ) : checkoutStep === 2 ? (
                            <CheckoutStep2 onNext={handleNextStep} />
                        ) : (
                            <CheckoutStep3 onConfirm={handleConfirm} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
