import { Link } from 'react-router-dom';

import foodPhoto from '../Assets/restaurantfood.jpg';

import '../Css/HeroSection.css';

function HeroSection() {
    return (
        <section id="hero-section">
            <article id="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="lead-text">Welcome to Little Lemon
At Little Lemon, we bring bold Mediterranean flavors to the heart of your city. Our chefs blend fresh ingredients, traditional recipes, and modern twists to create unforgettable dishes in a warm and inviting atmosphere. Whether you're here for a casual lunch or a cozy dinner, experience the zest of good food and great company.</p>
                <Link to="/booking" className="link-button"><button>Reserve a Table</button></Link>
            </article>
            <img src={foodPhoto} width="330" height="388" alt="restaurant food served on a plate"></img>
        </section>
    )
}

export default HeroSection;