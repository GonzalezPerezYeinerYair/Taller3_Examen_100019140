// C:\Users\User\OneDrive\Documentos\pweb\formulario-estudiantes.jsx
import React, { useState } from 'react';

const Formulario = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [formData, setFormData] = useState({
    documento: '',
    nombre: '',
    apellidoPaterno: '',
    telefono: '',
    correo: ''
  });
  const [editando, setEditando] = useState(false);
  const [indiceEditando, setIndiceEditando] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editando) {
      // Editar estudiante existente
      const nuevosEstudiantes = [...estudiantes];
      nuevosEstudiantes[indiceEditando] = formData;
      setEstudiantes(nuevosEstudiantes);
      setEditando(false);
      setIndiceEditando(null);
    } else {
      // Agregar nuevo estudiante
      setEstudiantes(prev => [...prev, formData]);
    }
    
    // Limpiar formulario
    setFormData({
      documento: '',
      nombre: '',
      apellidoPaterno: '',
      telefono: '',
      correo: ''
    });
  };

  const handleEditar = (index) => {
    setFormData(estudiantes[index]);
    setEditando(true);
    setIndiceEditando(index);
  };

  const handleEliminar = (index) => {
    const nuevosEstudiantes = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(nuevosEstudiantes);
  };

  const handleRestablecer = () => {
    setFormData({
      documento: '',
      nombre: '',
      apellidoPaterno: '',
      telefono: '',
      correo: ''
    });
    setEditando(false);
    setIndiceEditando(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Formulario */}
      <div style={{ marginBottom: '40px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Num. Ine:
            </label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Apellido Paterno:
            </label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Teléfono:
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Correo:
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              {editando ? 'Actualizar' : 'Enviar'}
            </button>
            <button
              type="button"
              onClick={handleRestablecer}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Restablecer
            </button>
          </div>
        </form>
      </div>

      {/* Tabla de estudiantes */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Lista de estudiantes</h2>
        {estudiantes.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No hay estudiantes registrados</p>
        ) : (
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            border: '1px solid #ccc'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Documento</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Nombre</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Apellido</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Correo</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Teléfono</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{estudiante.documento}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{estudiante.nombre}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{estudiante.apellidoPaterno}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{estudiante.correo}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{estudiante.telefono}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                    <button
                      onClick={() => handleEditar(index)}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        marginRight: '5px'
                      }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(index)}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Formulario;