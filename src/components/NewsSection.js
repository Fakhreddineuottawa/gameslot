import React from 'react';
import './NewsSection.css';

const NewsSection = () => (
    <section className="news-section">
        <h2>Actualit�s Du "Gaming" Au Monde</h2>
        <p>�tes vous int�ress� par les nouveaut�s du Gaming? Vous �tes au bon endroit.</p>
        <div className="news-item">
            <img src="path/to/image.jpg" alt="News" />
            <div className="news-content">
                <h3>Nouveaux jeux</h3>
                <p>Infinity met � votre disposition ces trois jeux.</p>
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
