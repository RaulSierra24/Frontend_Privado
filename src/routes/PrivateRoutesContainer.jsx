import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { Menu,  Usuario} from "../modules";
import { Footer, Navbar } from "../ui";
import { Departamento } from "../modules/Departamento/Departamento";


//rols 1-usuario normal 2-admin 3-superadmin
//workPosition 1-jefe agencia 2-oficial 3-admin 4-consultas 5-cobros 6-coordinador cobros

export const PrivateRouteContainer = () => {
    return (
        <div className="AltoBody animate__animated animate__fadeIn">
            <Navbar />
            <Routes>
                <Route element={<PrivateRoute rols={[1, 2, 3]} />}>
                    <Route path='/usuario' element={<Usuario />} />
                    <Route path='/menu' element={<Menu />} />
                    {/* <Route path='/empleados' element={<Empleado />} /> */}
                    <Route path='/departamentos' element={<Departamento />} />
                    <Route path='/puestos' element={<Menu />} />
                    
                    <Route path="/*" element={<Navigate to='/' />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}
