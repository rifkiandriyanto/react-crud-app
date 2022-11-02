import React, { useState } from 'react';

const AddProduct = (props) => {
  const initialFormState = {
    id: null,
    name: '',
    sku: '',
    description: '',
    brand: '',
    price: '',
  };
  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !product.name ||
          !product.sku ||
          !product.description ||
          !product.brand ||
          !product.price
        )
          return;


        props.addProduct(product);
        setProduct(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={product.name}
        onChange={handleInputChange}
      />
      <label>Sku</label>
      <input
        type='text'
        name='sku'
        value={product.sku}
        onChange={handleInputChange}
      />
      <label>Description</label>

      <input
        type='text'
        name='description'
        value={product.description}
        onChange={handleInputChange}
      />

      <label>Brand</label>
      <select onChange={handleInputChange} name='brand'>
        <option value={''} />
        {props.brandData.map((brand) => {
          return <option value={brand.brandname}>{brand.brandname}</option>;
        })}
      </select>

      <label>Price</label>

      <input
        type='number'
        name='price'
        value={product.price}
        onChange={handleInputChange}
      />

      <button>Add new product</button>
    </form>
  );
};

export default AddProduct;
