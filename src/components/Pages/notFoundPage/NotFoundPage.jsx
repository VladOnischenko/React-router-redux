import React from 'react';
import './notFoundPage.scss'
import {Link} from "react-router-dom";
import HomePage from "../homePage/HomePage";

const NotFoundPage = () => {
  return (
    <section className="store-items empty-page">
        <h1>Page not found</h1>
        <p>You can return
          <Link to="/" element={<HomePage/>}> HOME</Link>
        </p>
    </section>
  );
};

export default NotFoundPage;