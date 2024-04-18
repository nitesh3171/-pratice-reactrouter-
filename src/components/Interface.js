import React from 'react';
import './Interface.css';
import Food1 from '../Assets/food1.jpeg';
import Food2 from '../Assets/food2.jpeg';
import Food3 from '../Assets/food3.jpeg';

function Interface(){
    return (
 
  <div>
    <section className="hero">
        <h2>Delicious Food Delivered Right to Your Door</h2>
        <p>Order now and enjoy a wide range of cuisines from the comfort of your home!</p>
        <button>Order Now</button>
    </section>

    <section className="featured">
        <h2>Featured Dishes</h2>
        <div class="dish">
            <img src={Food1} alt="Dish 1"></img>
            <h3>Dish 1 Name</h3>
            <p>This is very popular dish of Maharasrta name is Chicken palaza</p>
        </div>
        <div className="dish">
            <img src={Food2} alt="Dish 2"></img>
            <h3>Dish 2 Name</h3>
            <p>This is famous dish of Solapur name is Crispy Potato </p>
        </div>
        <div className="dish">
            <img src={Food3} alt="Dish 3"></img>
            <h3>Dish 3 Name</h3>
            <p>This is famous dish of Nanded name is Samosa which made with Potato and deep fry in oil</p>
        </div>
    </section>
    <footer>
        <p>&copy; 2024 Food Delivery Service</p>
    </footer>
    </div>

    );
}

export default Interface;