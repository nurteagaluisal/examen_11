import { useState } from 'react';

function EditProductForm({ product, onUpdate }) {
  const [name, setName] = useState(product.name);
  const [address, setAddress] = useState(product.address);
  const [description, setDescription] = useState(product.description);
  const [estado, setEstado] = useState(product.estado);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      name,
      address,
      description,
      estado,
      price,
    };
    onUpdate(product.id, updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Dirección:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Descripción:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Estado:
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="Libre">Libre</option>
          <option value="Ocupada">Ocupada</option>
          <option value="Mantenimiento">Mantenimiento</option>
        </select>
      </label>
      <label>
        Precio:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default EditProductForm;
