import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/form/form.css";
import "../stylesheets/form/button.css";
import "../stylesheets/form/input.css";
import "../stylesheets/form/errors.css";
import Title from "../components/Title";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products");
    }
  }, [isAuthenticated]) //esta linea es para que se ejecute el useEffect cuando cambia el valor de isAuthenticated

  return (
    <div className='divForm'>
      <div>
        <Title word1="Iniciar Sesión"></Title>
        <form className='form' onSubmit={onSubmit}>
          {
            signinErrors.length > 0 && <div className='errorsBack'>{signinErrors[0]}</div>
          }
          <div>
            <label htmlFor="email">Email</label>
            {errors.email && <p className='errorsInputs'>Email es obligatorio</p>}
            <input type="email" {...register("email", { required: true })} />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            {errors.password && <p className='errorsInputs'>contraseña es obligatoria</p>}
            <input type="password" {...register("password", { required: true })} />
          </div>
          <button className="btnForm" type='sumbit'>
            <span>Iniciar sesión</span>
          </button>
          <p>¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default LoginPage