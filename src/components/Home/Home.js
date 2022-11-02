import React, { useState } from 'react';
import EditProduct from '../Forms/EditProduct';
import ProductTable from '../Tables/ProductTable';
import AddProduct from '../Forms/AddProduct';
import Card from '../UI/Card/Card';
import '../../Home.css';

const Home = () => {
  const productsData = [
    {
      id: 1,
      name: 'Product 1',
      sku: '012-B',
      description: 'lorem ipsum',
      brand: 'brand 1',
      price: 10000,
    },
    {
      id: 2,
      name: 'Product 2',
      sku: '051-A',
      description: 'lorem',
      brand: 'brand 2',
      price: 70000,
    },
    {
      id: 3,
      name: 'Product 3',
      sku: '011-A',
      description: 'lorem ipsum',
      brand: 'brand 1',
      price: 100000,
    },
  ];

  const brandData = [
    { id: 1, brandname: 'brand 1' },
    { id: 2, brandname: 'brand 2' },
    { id: 3, brandname: 'brand 3' },
  ];

  const initialFormState = {
    id: null,
    name: '',
    sku: '',
    description: '',
    brand: '',
    price: null,
  };

  // Setting state
  const [products, setProducts] = useState(productsData);
  const [currentProduct, setCurrentProduct] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setEditing(false);

    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);

    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
  };

  const editRow = (product) => {
    setEditing(true);

    setCurrentProduct({
      id: product.id,
      name: product.name,
      sku: product.sku,
      description: product.description,
      brand: product.brand,
      price: product.price,
    });
  };

  return (
    <Card className='home'>
      <div className='container'>
        <div className='flex-row'>
          <div className='flex-large'>
            {editing ? (
              <>
                <h2>Edit Product</h2>
                <EditProduct
                  editing={editing}
                  setEditing={setEditing}
                  currentProduct={currentProduct}
                  updateProduct={updateProduct}
                  brandData={brandData}
                />
              </>
            ) : (
              <>
                <h2>Add Product</h2>
                <AddProduct addProduct={addProduct} brandData={brandData} />
              </>
            )}
          </div>
          <div className='flex-large'>
            <h2>View Products</h2>
            <ProductTable
              products={products}
              editRow={editRow}
              deleteProduct={deleteProduct}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;
