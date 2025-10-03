import {useState} from 'react'
//import prototype from 'prop-types'

const FormularioAlumno = ({agregarAlumno}) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");
    const [sexo, setSexo] = useState("");
    const [hablaIngles, setHablaIngles] = useState(false);

    const handleChangeSexo = (e) => {
    setSexo(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno({
        nombre_alumno: nombre, 
        email_alumno: email, 
        curso_alumno: curso,
        sexo_alumno: sexo, 
        habla_ingles: hablaIngles,
    });

    //limpiar formulario de alumno, imprime espacios en blnco
    setNombre("");
    setEmail("");
    setCurso("");
    setSexo("");
    setHablaIngles(false);
};
return (
    //Se crea el formulario con sus entradas
    <form onSubmit={handleSubmit}>  
        <div className='mb-3'>
            <label className='form-label'>Nombre del alumno: </label>
            <input
                type="text"
                name='nombre_alumno'
                className='form-control'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Email del alumno: </label>
            <input
                type="text"
                name='email_alumno'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Seleccione el curso</label>
            <select
                name='curso_alumno'
                className='form-select' 
                value={curso} 
                onChange={(e) => setCurso(e.target.value)}
                required>
                <option value="">-- Seleccione un curso --</option>
                <option value="React">ReactJS</option>
                <option value="Angular">Python</option>
                <option value="Vue">NodeJS</option>
            </select>
        </div>    
        <div className='mb-3'>
            <label className='form-label'>Sexo del alumno</label>
            <div className='form-check'>
                <input
                 className='form-check-input'
                    type="radio"
                    name='sexo_alumno'
                    id='masculino'
                    value="Masculino"
                    checked={sexo === "Masculino"}
                    onChange={handleChangeSexo}
                />
                <label className='form-check-label' htmlFor='masculino'>Masculino</label>
            </div>
        <div className='form-check-input'>
            <input
                className='form-check-input'
                type="radio"
                name='sexo_alumno'
                id='femenino'
                value="Femenino"
                checked={sexo === "Femenino"}
                onChange={handleChangeSexo}
            />
            <label className='form-check-label' htmlFor='femenino'>Femenino</label>
        </div>
        </div>
        <div className='mb-3'>
            <label className='form-label'>¿Hablas inglés?</label>
            <div className='form-check form-switch'>
                <input
                    name='habla_ingles'
                    className='form-check-input'
                    type="checkbox"
                    id='ingles'
                    checked={hablaIngles}
                    onChange={(e) => setHablaIngles(e.target.checked)}
                />
                <label className='form-check-label' htmlFor='ingles'>
                    {hablaIngles ? "Sí" : "No"} 
                </label>
            </div>
        </div>
        <div className='d-grid gap-2 mb-5'>
            <button type='submit' className='btn btn-primary block btn_add'>
                Agregar Alumno
            </button>
        </div>
    </form> 
);
};
/*FormularioAlumno.prototype = {
    agregarAlumno: prototype.func.isRequired,
};
export default FormularioAlumno; */
export default FormularioAlumno;