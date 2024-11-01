import { useState } from 'react';
import '../assets/Styles/uploadproduct.css';
import NavFarmer from './NavFarmer';

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    console.log('Product Data:', productData);
  };

  return (
    <>
      <NavFarmer />
      <hr />
      <div className="upload-product">
        <div className="upload-product-form">
          <h2>Upload a New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select name="category" value={productData.category} onChange={handleChange} required>
                <option value="" disabled>Select Category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Herbs">Herbs</option>
                <option value="Grains">Grains</option>
              </select>
            </div>

            <div className="form-group flex-row">
              <div className="half-width">
                <label>Price (per unit)</label>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <label>Quantity Available</label>
                <input
                  type="number"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleChange}
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <button type="submit">Submit Product</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadProduct;
