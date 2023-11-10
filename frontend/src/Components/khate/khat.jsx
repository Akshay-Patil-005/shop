import React from 'react';
import './Components/Khadya/khadya.css';
import product from '../Assets/Product'; // Import the product data

const Khat = () => {
    return (
        <div className="foodShow"> {/* Use "className" instead of "class" */}
            <h1>सेंद्रिय<span>खते</span></h1>
            <br />

            <div id="show">
                {product.map((item) => (
                    
                    <div key={item.id}>
                        
                        <img src={item.image} alt={item.name} />
                        <div className="text">
                            <h3>
                                <span>{item.name}</span>
                            </h3>
                        </div>

                        <div className="price">
                            <p>
                                <style>{'&#8377'}</style> {item.price}
                            </p>

                            <button>
                                आधिक माहिती
                            </button>
                            <button>
                                खरेदी 
                            </button>
                        </div>
                        
                    </div>
                ))}
            </div>
            

        </div>
    );
};

export default Khat;
