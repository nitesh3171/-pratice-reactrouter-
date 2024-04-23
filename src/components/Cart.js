import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default CartPage;

