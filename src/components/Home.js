import React from 'react';
import {Link } from 'react-router-dom';
function Home(){
    return(
        <div>
            <h1>This is the home page</h1>
            <link To="about">Click to view about page</link>
            <link To="contact">Click to view contact page</link>

        </div>
    );
}

export default Home;