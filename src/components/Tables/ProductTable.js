import React from 'react';

const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sku</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.products.length > 0 ? (
          props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.description}</td>
              <td>{product.brand}</td>
              <td>{product.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(product);
                  }}
                  className='button muted-button'
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteProduct(product.id)}
                  className='button muted-button'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No products</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
