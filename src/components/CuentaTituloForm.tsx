import React, { useState } from 'react';
import axios from 'axios';

const CuentaTituloForm = () => {
  const [cuentaVinculada, setCuentaVinculada] = useState('');
  const [email, setEmail] = useState('');
  const [terminosAceptados, setTerminosAceptados] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/v1/cuentas-titulos/crear', {
        cuentaVinculada,
        email,
        terminosAceptados,
      });
      setResponseMessage(response.data.message);
      setErrorMessage('');

      // Limpiar los campos después de un registro exitoso
      setCuentaVinculada('');
      setEmail('');
      setTerminosAceptados(false);

      // Limpiar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setResponseMessage('');
      }, 3000);

    } catch (error) {
      setErrorMessage('Error al crear la cuenta título');
      setResponseMessage('');

      // Limpiar el mensaje de error después de 3 segundos
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center">Crear Cuenta Título</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cuentaVinculada" className="form-label">Cuenta Vinculada</label>
              <input 
                type="text" 
                className="form-control" 
                id="cuentaVinculada" 
                value={cuentaVinculada} 
                onChange={(e) => setCuentaVinculada(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-check mb-3">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="terminosAceptados" 
                checked={terminosAceptados} 
                onChange={(e) => setTerminosAceptados(e.target.checked)} 
                required 
              />
              <label className="form-check-label" htmlFor="terminosAceptados">
                Acepto los Términos y Condiciones
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Crear Cuenta Título</button>
          </form>

          {/* Mostrar mensaje de éxito o error */}
          {responseMessage && <div className="alert alert-success mt-3">{responseMessage}</div>}
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default CuentaTituloForm;
