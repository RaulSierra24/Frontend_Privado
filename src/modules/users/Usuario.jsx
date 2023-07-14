import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiURL } from "../../api/apiRest";
import { errorModal, getToken, questionModal, successModal } from "../../utils";
import { Loader, NormalButton, Pagination, TdTable, TransitionPopover } from "../../ui";
import { CrearUsuario } from "./CrearUsuario";
import { EditarUsuario } from "./EditarUsuario";
import axios from "axios";

export const Usuario = () => {

  const [page, setPage] = useState(1);
  const { watch } = useForm();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [loader, setLoader] = useState(false);
  const [dataUsuarios, setDataUsuarios] = useState({ usuarios: [], cantidad: null, totalPaginas: null })
  const [dataUsuarioIndividual, setDataUsuarioIndividual] = useState({ usuario: {} });
  let watchItems = watch();

  const obtenerTotalUsuarios = async (busqueda) => {
    setLoader(true);
    await axios.get(`${apiURL}/api/usuario`, { headers: { 'token': getToken() }, params: { busqueda, pagina: page } })
      .then((response) => {
        setDataUsuarios({
          usuarios: response.data.usuarios,
          cantidad: response.data.cantidad,
          totalPaginas: response.data.totalPaginas
        });
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        errorModal('Ha ocurrido algún error mientras se cargaban los productos')
      })
  }

  const obtenerUsuarioIndividual = async (id) => {
    setLoader(true);
    await axios.get(`${apiURL}/api/usuario/individual`, { headers: { 'token': getToken() }, params: { id } })
      .then((response) => {
        setDataUsuarioIndividual({
          usuario: response.data.usuario
        });
        setLoader(false);
        setShow2(true);
      })
      .catch((error) => {
        setLoader(false);
        errorModal('Ha ocurrido algún error mientras se cargaba la información del producto')
      })

  }

  const eliminarUsuario = async (id) => {
    setLoader(true);
    await axios.delete(`${apiURL}/api/usuario/eliminar`, { headers: { 'token': getToken() }, params: { id } })
      .then(() => {
        successModal('Usuario eliminado con éxito');
        obtenerTotalUsuarios('');
      })
      .catch((error) => {
        errorModal('Ocurrió un error en la eliminación del usuario');
      })
  }


  useEffect(() => {
    obtenerTotalUsuarios(watchItems.buscador);
    // eslint-disable-next-line
  }, [page, watchItems.buscador]);

  useEffect(() => {
    setPage(1);
  }, [watchItems.buscador]);

  return (
    <div>
      {loader && <Loader />}
      <div className="flex justify-center  mt-14">
        <div className='sm:flex justify-start w-5/6'>
        {/* <div className='sm:flex justify-between w-5/6'> */}
          {/* <InputSearch register={register} name="buscador" position='md:w-1/4 md:mb-0 mb-4 font-semibold text-gray-600' /> */}
          <NormalButton bgColor='bg-blue-500' bgText='text-white' hoverColor='hover:bg-blue-600' title={
            <div className="flex font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Crear Usuario
            </div>

          } funcion={() => setShow(true)} />
        </div>
      </div>

      <div className="overflow-x-auto mt-2">
        <div className="  flex items-center justify-center font-sans overflow-hidden">
          <div className="w-auto lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-blue-500 text-white uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">Nombre</th>
                    <th className="py-3 px-6 text-center">Usuario</th>
                    <th className="py-3 px-6 text-center">Correo electrónico</th>
                    <th className="py-3 px-6 text-center">Estado</th>
                    <th className="py-3 px-6 text-center">Rol</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {
                    dataUsuarios.usuarios.length === 0 ?
                      <tr>
                        <td>
                          <div className=' text-center font-bold text-gray-400 m-4'>No existen registros de Usuarios</div>
                        </td>
                      </tr>
                      :
                      dataUsuarios.usuarios.map((item, index) => (
                        <tr key={index} className={`"border-b border-gray-200 ${index % 2 > 0 ? 'bg-gray-50' : ''} hover:bg-gray-100"`}>
                          <TdTable valor={item.nombre} />
                          <TdTable valor={item.usuario} />
                          <TdTable valor={item.correo_electronico} />
                          <TdTable valor={item.estado === 1 ? 'Habilitado' : 'Inhablitado'} />
                          <TdTable valor={item.rol.descripcion} />
                          <TdTable valor={<>
                            <div className="flex justify-center">
                            <div className="mx-1">
                            <NormalButton bgColor='bg-yellow-400' bgText='text-white' hoverColor='bg-yellow-500' title='editar' funcion= {()=>obtenerUsuarioIndividual(item.id_usuario)}  /> 
                            </div>
                            <div className="mx-1">
                            <NormalButton bgColor='bg-red-400' bgText='text-white' hoverColor='bg-red-500' title='eliminar' funcion= {() => questionModal('¡Confirmar eliminación!', '¿Está seguro que desea eliminar este registro?', () => eliminarUsuario(item.id_usuario))}  /> 
                            </div>
                             
                            </div>
                          </>} />
                        </tr>
                      ))
                  }

                </tbody>
              </table>
            </div>
            <div className="flex justify-end">
              <Pagination totalPages={dataUsuarios.totalPaginas} actualPage={page} onChange={(newPage) => setPage(newPage)} />
            </div>
            <TransitionPopover show={show} setShow={setShow} >
              <CrearUsuario setShow={setShow} obtenerTotalUsuarios={obtenerTotalUsuarios} setLoader={setLoader} />
            </TransitionPopover>
            <TransitionPopover show={show2} setShow={setShow2} >
              <EditarUsuario setShow2={setShow2} obtenerTotalUsuarios={obtenerTotalUsuarios} dataUsuarioIndividual={dataUsuarioIndividual} setLoader={setLoader} />
            </TransitionPopover>
          </div>
        </div>
      </div>
    </div>
  )
}
