import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavFarmer from './NavFarmer';

function ConsumerRequests() {

    const products = [
        {
          _id: '1',
          name: 'Organic Apples',
          category: 'Fruits',
          price: 2.5,
          quantity: 100,
          description: 'Fresh organic apples from local farms.',
          image: '/Images/Home1.jpg', 
        },
        {
          _id: '2',
          name: 'Carrots',
          category: 'Vegetables',
          price: 1.2,
          quantity: 150,
          description: 'Crisp and healthy carrots.',
          image: 'path_to_your_image/carrots.jpg', 
        },
        {
          _id: '3',
          name: 'Tomatoes',
          category: 'Vegetables',
          price: 3.0,
          quantity: 80,
          description: 'Juicy tomatoes, perfect for salads.',
          image: 'path_to_your_image/tomatoes.jpg', 
        },
        {
          _id: '4',
          name: 'Bananas',
          category: 'Fruits',
          price: 1.0,
          quantity: 120,
          description: 'Sweet and ripe bananas.',
          image: 'path_to_your_image/bananas.jpg', 
        },
    ];
    
    const handleDeleteProduct = (productId) => {
        console.log(`Delete product with id: ${productId}`);
    };
    
    return (
        <>
            <NavFarmer />
            <hr />
            <div className="Home">
                <table className="productTable">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Ordered Quantity</th>
                            <th>Total Amount</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>
                                    <h3>{product.name}</h3>
                                </td>
                                <td>
                                    <h3>{product.category}</h3>
                                </td>
                                <td>
                                    <h3>${product.price.toFixed(2)}</h3>
                                </td>
                                <td>
                                    <h3>{product.quantity}</h3>
                                </td>
                                <td>
                                    <p className='price'>{product.price * product.quantity}</p>
                                </td>
                                <td>
                                    {product.image && (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                    )}
                                </td>
                                <td>
                                    <Link to={`/view-product/${product._id}`}>
                                        <button type="button" className="viewProduct_details">View</button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="viewProduct_delete"
                                        onClick={() => handleDeleteProduct(product._id)}
                                    >
                                        Cancel Request
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ConsumerRequests;
