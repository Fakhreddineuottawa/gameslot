import React from 'react';
import './NewsSection.css';

const NewsSection = () => (
    <section className="news-section">
        <h2>Actualités Du "Gaming" Au Monde</h2>
        <p>Êtes vous intéressé par les nouveautés du Gaming? Vous êtes au bon endroit.</p>
        <div className="news-item">
            <img src="path/to/image.jpg" alt="News" />
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

export default NewsSection;
