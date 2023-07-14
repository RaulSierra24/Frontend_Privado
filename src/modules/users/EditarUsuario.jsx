import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputEmail, InputNumber, InputPassword, InputText, SelectOption } from "../../ui";
import { apiURL } from "../../api/apiRest";
import { errorModal, getToken, successModal } from "../../utils";
import axios from "axios";


const estado = [{ estado: 1, descripcion: 'Habilitado' }, { estado: 2, descripcion: 'Deshabilitado' }];
const rol = [{ id_rol: 1, descripcion: 'Administrador' }, { id_rol: 2, descripcion: 'Usuario' }];

export const EditarUsuario = ({ setShow2, obtenerTotalUsuarios, dataUsuarioIndividual, setLoader }) => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const editarUsuario = async (data) => {
    setLoader(true);

    await axios.put(`${apiURL}/api/usuario/editar`, data, { headers: { 'token': getToken() }, params: { id: dataUsuarioIndividual.usuario.id_usuario } })
      .then(() => {
        setLoader(false);
        successModal('Usuario editado con éxito');
        setShow2(false);
        obtenerTotalUsuarios('');
      })
      .catch(() => {
        setShow2(false);
        errorModal('Error al editar el usuario')
      })
  }

  useEffect(() => {
    setValue('nombre', dataUsuarioIndividual.usuario.nombre);
    setValue('usuario', dataUsuarioIndividual.usuario.usuario);
    setValue('correo_electronico', dataUsuarioIndividual.usuario.correo_electronico);
    setValue('telefono', dataUsuarioIndividual.usuario.telefono);
    setValue('estado', dataUsuarioIndividual.usuario.estado);
    setValue('id_rol', dataUsuarioIndividual.usuario.id_rol);
    // eslint-disable-next-line 
  }, [])


  return (
    <div>
      <div className="text-center mt-10 mb-4">
        <h2 className="sm:text-4xl text-[25px] tracking-tight text-gray-500 font-bold">
          EDITAR USUARIO
        </h2>
      </div>
      <div className={`flex justify-center my-2 px-0 md:mx-0 mb-5`}>
        <form className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6" onSubmit={handleSubmit((data) => editarUsuario(data))}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <InputText nameLabel='Nombre' register={register} name="nombre" message="El registro es requerido" errors={errors} position="md:w-1/2" Placeholder="José David Ruiz" />
            <InputText nameLabel='Usuario' register={register} name="usuario" message="El registro es requerido" errors={errors} position="md:w-1/2" Placeholder="joseruiz" />
            <InputPassword nameLabel='Contraseña' register={register} name="contrasenia" message="el registro es requerido" errors={errors} position="md:w-1/2" Placeholder="******" />
            <InputEmail nameLabel='Correo electrónico' register={register} name="correo_electronico" message="el registro es requerido" errors={errors} position="md:w-1/2" Placeholder="jose@gmail.com" />
            <InputNumber nameLabel='Celular' register={register} name="telefono" message="el registro es requerido" errors={errors} position="md:w-1/2" Placeholder="58980727" />
            <SelectOption nameLabel='Estado' register={register} name='estado' message='el registro es requerido' errors={errors} array={estado} valueOption='estado' nameOption='descripcion' position="md:w-1/2" />
            <SelectOption nameLabel='Rol' register={register} name='id_rol' message='el registro es requerido' errors={errors} array={rol} valueOption='id_rol' nameOption='descripcion' position="md:w-1/2" />
            <div className="w-full md:w-full px-3 mb-6">
              <div className="mb-6 text-center flex">
                <input
                  className="w-full mr-1 px-3 py-2 font-bold text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                  value='Editar'
                />

                <button type="button" onClick={() => setShow2(false)} className="w-full px-4 py-2 bg-red-700 rounded-md cursor-pointer hover:bg-red-600 focus:outline-none focus:shadow-outline font-bold text-white">
                  Cancelar
                </button>

              </div>
              <hr className="border-t" />
            </div>
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">Área de desarrollo de software</span>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}