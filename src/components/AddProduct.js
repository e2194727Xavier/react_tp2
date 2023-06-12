import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [isAdded, setIsAdded] = useState(false); // État pour afficher le message d'ajout réussi

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !category) {
      alert('Please fill in all fields');
      return;
    }

    const newProduct = {
      name,
      description,
      price,
      category,
    };

    onAdd(newProduct);

    setIsAdded(true); // Définit l'état à true pour afficher le message d'ajout réussi

    setName('');
    setDescription('');
    setPrice('');
    setCategory('');
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      {isAdded && (
        <div className="alert alert-success" role="alert">
          Product added successfully!
        </div>
      )}
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Product category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 d-md-block">
          <button type="submit" className="btn btn-primary">
            Add product
          </button>
          <Link to="/home" className="btn btn-primary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
