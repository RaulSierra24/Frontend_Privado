import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Submenu } from "./Submenu";
import { NavLink } from "react-router-dom";
import { Autorization, logout } from "../utils";


export const Navbar = () => {

    const logoutSystem = () => {
        logout();
        window.location.reload();
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const itemsAvaluo = [
        { id: 1, label: "Generar Avalúo", href: "/avaluo" },
        { id: 2, label: "Estado del Avalúo", href: "/estadoavaluo" },
    ];
    const titleAvaluo = "GESTIÓN DE AVALÚOS";

    const itemsManejoAvaluo = [
        { id: 1, label: "Pendientes de aprobación", href: "/pendienteaprobacion" },
        { id: 2, label: "Pendientes de autorización", href: "/pendienteautorizados" },
        { id: 3, label: "Autorizados", href: "/autorizados" },
    ];
    const titleManejoAvaluo = "MANEJO DE AVALÚOS";

   
    return (
        <nav
            className="w-full z-30 top-10 bg-white shadow-lg shadow-slate-100 mt-0"
        >
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2 ">
                <div className="site-logo">
                    <a href="/">
                        <img
                            className="w-22 cursor-pointer md:w-20"
                            src="https://img.freepik.com/premium-vector/letter-cc-logo-design-abstract-letter-cc-logo-design_219523-125.jpg"
                            alt="#"
                        />
                    </a>
                </div>

                {/* menu normal */}
                <div
                    className=" md:flex w-full hidden justify-between"
                >
                    <nav>
                        <ul className="md:flex items-center justify-between text-xs text-gray-500 pt-4 md:pt-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                >
                                    INICIO
                                </NavLink>

                                <Autorization rols={[1,2]}>
                                    <NavLink
                                        to='/menu'
                                        className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                    >
                                        MENÚ
                                    </NavLink>
                                </Autorization>



                                <Autorization rols={[1,2]}>
                                    <NavLink
                                        to='/usuario'
                                        className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                    >
                                        EMPLEADOS
                                    </NavLink>
                                </Autorization>

                                

                                <Autorization rols={[1,2]}>
                                    <NavLink
                                        to='/puestos'
                                        className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                    >
                                        PUESTOS
                                    </NavLink>
                                </Autorization>

                                <Autorization rols={[1,2]}>
                                    <NavLink
                                        to='/departamentos'
                                        className="rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent cursor-pointer inline-block no-underline hover:bg-blue-50 font-bold text-xs py-2 px-4 lg:ml-2 mr-2"
                                    >
                                        DEPARTAMENTOS
                                    </NavLink>
                                </Autorization>


                                <Autorization rols={[3]}>
                                    <Dropdown items={itemsAvaluo} title={titleAvaluo} />
                                </Autorization>

                                <Autorization rols={[4]}>
                                    <Dropdown items={itemsManejoAvaluo} title={titleManejoAvaluo} />
                                </Autorization>


                            </li>
                        </ul>
                    </nav>

                    <div
                        className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
                    >
                        <div className="auth flex items-center w-full md:w-full">
                            <button
                                onClick={logoutSystem}
                                className="text-xs transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent text-gray-500 hover:text-white font-bold  p-2 rounded mr-4 hover:bg-red-500 "
                            >
                                CERRAR SESIÓN
                            </button>
                        </div>
                    </div>
                </div>

                {/* hamburgesa */}
                <div className="md:hidden">
                    <label
                        htmlFor="menu-toggle"
                        className="cursor-pointer md:hidden block ml-auto"
                    >
                        <button onClick={toggleMenu}>
                            {isOpen ?
                                < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-current text-blue-900">
                                    <title>cerrar</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg
                                    className="fill-current text-blue-900 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                >
                                    <title>menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>

                            }

                        </button>
                    </label>

                    <div
                        className={`${isOpen ? "animate__animated animate__backInDown animate__faster" : "animate__animated animate__backOutUp"
                            } absolute inset-x-0 bg-white z-50 mt-2 mx-3 rounded-lg shadow-2xl`}
                        id="menu"
                    >
                        <ul className="w-full items-center justify-end text-xs text-gray-500">
                            <li className="">
                                <Autorization rols={[1,2]}>
                                    <Submenu title='MANEJO DE USUARIOS' titleLink='/usuario' />
                                </Autorization>
                                <Autorization rols={[1,2]}>
                                    <Submenu title='MENU' titleLink='/menu' />
                                </Autorization>

                                <Autorization rols={[1,2]}>
                                    <Submenu items={itemsAvaluo} title={titleAvaluo} />
                                </Autorization>

                                <Autorization rols={[1,2]}>
                                    <Submenu items={itemsManejoAvaluo} title={titleManejoAvaluo} />
                                </Autorization>

                              
                                <div className="auth ml-4 flex justify-start w-full md:w-full">
                                    <button
                                        onClick={logoutSystem}
                                        className="text-xs transition ease-in-out delay-150 hover:-translate-y-0.5  duration-300 bg-transparent text-gray-500 hover:text-white font-bold  p-2 rounded mr-4 hover:bg-red-500 "
                                    >
                                        CERRAR SESIÓN
                                    </button>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
};
