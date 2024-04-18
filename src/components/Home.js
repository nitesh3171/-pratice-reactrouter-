import React from 'react';
import {Link } from 'react-router-dom';
function Home(){
    return(
        <div>
            <h1>This is the home page</h1>
            <Link To="about">Click to view about page</Link>
            <Link To="contact">Click to view contact page</Link>

        </div>
    );
}

export default Home;