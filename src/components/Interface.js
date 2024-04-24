import React from 'react';
import './Interface.css';
import Food1 from '../Assets/food1.jpeg';
import Food2 from '../Assets/food2.jpeg';
import Food3 from '../Assets/food3.jpeg';
import Cart from './Cart';

function Interface(){
    return (
 
  <div>
    <div>
    <section className="hero">
        <h2>Delicious Food Delivered Right to Your Door</h2>
        <p>Order now and enjoy a wide range of cuisines from the comfort of your home!</p>
    </section>
    </div>

    <section className="featured">
        <h2>Featured Dishes</h2>
        <div className='menu'>
        <div class="dish">
            <img src={Food1} alt="Dish 1"></img>
            <h3>Braed Pasta</h3>
            <p>This is very popular dish of Maharasrta name is Chicken palaza</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Order Now</button>
        </div>
        <div className="dish">
            <img src={Food2} alt="Dish 2"></img>
            <h3>Manchurian</h3>
            <p>This is famous dish of Solapur name is Crispy Potato </p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Order Now</button>
        </div>
        <div className="dish">
            <img src={Food3} alt="Dish 3"></img>
            <h3>Samosa</h3>
            <p>This is famous dish of Nanded name is Samosa which made with Potato and deep fry in oil</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Order Now</button>  
        </div>
        </div>
    </section>
    <footer>
        <p>&copy; 2024 Food Delivery Service</p>
    </footer>
    {/* cart new window code */}
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Cart Items
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>

    );
}

export default Interface;