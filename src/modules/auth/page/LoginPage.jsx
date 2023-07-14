import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InputLogin } from '../components';
import { useEffect, useState } from 'react';
import { Loader } from '../../../ui/Loader';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { apiURL } from '../../../api/apiRest';
import { errorModal, saveRolLocalStorage, saveTokenLocalStorage, successModal } from '../../../utils';
import axios from 'axios';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({ token: null, rol: null })


  const inicioSesion = async (data) => {
    setLoading(true);
    await axios.post(`${apiURL}/api/auth/login`, data)
      .then((response) => {
        saveTokenLocalStorage(response.data.token);
        saveRolLocalStorage(response.data.rol);
        setDataLogin({
          token: response.data.token,
          rol: response.data.rol
        });
        setLoading(false);
        successModal('Inicio de sesión exitoso', 'top-end');
      })
      .catch((error) => {
        errorModal(error.response.data.msg);
      });
  }

  useEffect(() => {
    if (dataLogin.token && dataLogin.rol) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [dataLogin.token, dataLogin.rol])

  const handleClick = () => {
    setHidden(!hidden);
  };



  return (
    <div className="bg-white animate__animated animate__fadeIn">
      {loading && <Loader />}
      <div className="flex justify-center h-screen">
        <div className={`hidden bg-cover lg:block lg:w-2/3 bg-[url('../public/assets/images/cunor_usac.JPG')]`}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-70">
            <div>
              <h2 className="text-4xl font-bold text-white">LOGIN</h2>

              <p className="max-w-xl mt-3 text-white">SISTEMA DESARROLLO DE EXAMENES PRIVADOS</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-4 lg:mx-auto lg:w-2/6 rounded-none shadow-none my-0">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-900 flex justify-center items-center">LOGIN</h2>
              <p className="mt-3 text-gray-500">INICIO DE SESIÓN - ÁREA DE DESARROLLO DE SOFTWARE</p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit((data) => inicioSesion(data))}>
                <InputLogin
                  register={register}
                  name='usuario'
                  nameLabel='Usuario'
                  placeholderInput='raulsierra'
                  errors={errors}
                />

                <div className='space-y-2 relative '>
                  <InputLogin
                    register={register}
                    name='contrasenia'
                    nameLabel='Contraseña'
                    typeInput={`${hidden ? 'password' : 'text'}`}
                    placeholderInput='********'
                    errors={errors}
                  />
                  {hidden ? <EyeIcon onClick={handleClick} className="absolute right-3 top-5 cursor-pointer h-6 w-6 text-blue-900" /> : <EyeOffIcon onClick={handleClick} className="absolute right-3 top-5 cursor-pointer h-6 w-6 text-blue-900" />}
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="font-bold w-36 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    INGRESAR
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">CUNOR, COBÁN A. V.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
