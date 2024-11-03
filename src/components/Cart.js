import React, { useState } from 'react';

function Cart({ id, image, info, name, price, removeMeal }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 100)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    // Format the price as Indian Rupees
    const formatPrice = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2
        }).format(amount);
    };

    return (
        <div className='cart'>
            <img src={image} className="image" alt={name} />

            <div className="meal-info">
                <div className="meal-details">
                    <h4 className="meal-price">{formatPrice(price)}</h4>
                    <h4 className="meal-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeMeal(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Cart;
