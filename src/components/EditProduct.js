import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditProduct = ({ products, onUpdate }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
    }
  }, [products, productId]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !category) {
      alert('Please fill in all fields');
      return;
    }

    const updatedProduct = {
      id: productId,
      name,
      description,
      price,
      category,
    };

    onUpdate(productId,updatedProduct);
    setIsUpdated(true);
    setTimeout(() => navigate('/home'), 2000); // Redirige vers l'accueil après 2 secondes
  };

  if (!products || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Edit Product</h2>
      {isUpdated && (
        <div className="alert alert-success" role="alert">
          Product updated successfully!
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
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update product
          </button>
          <Link to="/home" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
