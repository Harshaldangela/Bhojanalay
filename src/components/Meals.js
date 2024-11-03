import React from 'react';
import Cart from './Cart';

function Meals({ meals, removeMeal }) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Adarsh Bhojanalay</h2>
            </div>
            <div className='carts'>
                {
                    meals.map((meal) => (
                        <Cart key={meal.id} {...meal} removeMeal={removeMeal} />
                    ))
                }
            </div>
        </div>
    );
}

export default Meals; 
