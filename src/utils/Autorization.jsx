import { useEffect, useState } from "react";
import { decryptRolLocalStorage } from "./manager";


export const Autorization = ({ rols, children }) => {
    const [rolAutorization, setRolAutorization] = useState(false);
    const rol = decryptRolLocalStorage();

    useEffect(() => {
        if (rols) {
            for (let i = 0; i < rols.length; i++) {
                if (rol === rols[i].toString()) {
                    setRolAutorization(true);
                    break;
                }
            }
        } else {
            setRolAutorization(false);
        }

    }, [rol, rols]);

    return (
        <>
            {
                (rolAutorization) ? children : ''
            }
        </>
    )
}
