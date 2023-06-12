import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    return data;
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = async (id, updatedProduct) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...data } : product
      )
    );
  };

  const addProduct = async (newProduct) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    setProducts([...products, data]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <ProductList
                products={products}
                onDeleteProduct={deleteProduct}
                onUpdateProduct={updateProduct}
              />
            }
          />
          <Route
            path="/add-product"
            element={<AddProduct onAdd={addProduct} />}
          />
          <Route
            path="/edit-product/:id"
            element={<EditProduct products={products} onUpdate={updateProduct} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
