import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and Condition</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magni voluptate delectus ipsum quae reiciendis, non sed!</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;