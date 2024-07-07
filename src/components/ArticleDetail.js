import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find(article => article.id === id);

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetail;
