"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function ProductsForm() {
  const [product, setProduct] = useState({
    address: "",
    name: "",
    price: "",
    description: "",
    estado: ""
  });

  const handleChange = (e) => {
    //console.log(e.target.value, e.target.name);
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(product);
    const res = await axios.post('/api/products', product);
    if (res.status == 200) {
      location.href = "/products";
    } else {
      alert("Error en el registro");
    }
  }

  return (
    <div className='m-8'>
      <h2 className="text-2xl font-extrabold text-gray-400 hover:text-gray-800">Products</h2>
      <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-gray-50'>
        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="name">
          Name
        </label>
        <input type="text" name="name" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Input name" />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="name">
          address
        </label>
        <input type="text" name="address" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Input address" />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="name">
          Caracteristicas
        </label>
        <input type="text" name="description" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Input caracteristicas  " />
        
        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="name">
          estado
        </label>
        <input type="text" name="estado" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Input estado  " />

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor="name">
          Alquiler
        </label>
        <input type="text" name="price" onChange={handleChange} className='bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder="Input price" />

        <button className='bg-blue-500 hover:bg-blue-700 text-sm text-white 
          font-bold py-2 px-4 rounded mt-5'>
          Guardar</button>
      </form>
    </div>
  )
}

export default ProductsForm