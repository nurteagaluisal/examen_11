"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

async function loadProducts() {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}





function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await loadProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);
  const deleteProduct = async (productId) => {
    try {
      if (confirm('Are you sure you want to delete this product?')) {
        const res = await axios.delete(`/api/products/${productId}`);
        if (res.status === 204) {
          // Update the products state after successful deletion
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
        }
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (productId, updatedProduct) => {
    try {
      const res = await axios.put(`/api/products/${productId}`, updatedProduct);
      if (res.status === 200) {
        // Actualiza el estado de los productos después de una actualización exitosa
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId ? { ...product, ...updatedProduct } : product
          )
        );
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  
  

  return (
    <>
      <h2 className="text-2xl font-extrabold dark:text-white m-8">
        Products {' '}
        <a href="/products/new" className="bg-blue-500
         hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 
         rounded mt-5">
          Nuevo
        </a>
      </h2>
      <div className='shadow-md rounded-md px-8 pt-6 pb-8 mb-4'>
        <table className='min-w-full text-left text-sm font-light'>
          <thead>
            <tr className='border-b font-medium bg-gray-300'>
              <th>Options</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Caracteristicas</th>
              <th>Estado</th>
              <th>Alquiler</th>
              <th>Fecha creacion</th>
              <th>Fecha actualizacion</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product, index) => {
              return (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="whitespace-nowrap px-6 py-4"> <button
                      className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded mr-2"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button> 
                    <button
                      className="text-white bg-green-500 hover:bg-green-700 py-2 px-3 rounded"
                      onClick={() => updateProduct(product.id)}
                    >
                      Actualizar
                    </button>
                    </td>
                <td className="whitespace-nowrap px-6 py-4">{product.id}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.name}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.address}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.description}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.estado}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.price}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.created_at}</td>
                <td className="whitespace-nowrap px-6 py-4">{product.update_at}</td>
              </tr>
              ); 
          })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList