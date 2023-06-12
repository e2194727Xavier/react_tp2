import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductList = ({ products, onDeleteProduct, onUpdateProduct }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-3 product-card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteProduct(product.id)}
                  >
                    <FaTimes /> Delete
                  </button>
                  <Link
                    to={`/edit-product/${product.id}`}
                    className="btn btn-primary"
                    onClick={() => onUpdateProduct(product.id,product)}
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
