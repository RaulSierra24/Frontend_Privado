import { NavLink } from "react-router-dom"

export const ButtonLink = ({ bgColor, bgText, hoverColor, title, direccion }) => {
    return (
        <NavLink to={direccion}>
            <button className={`block mt-0.5  lg:inline-block ${bgColor} ${bgText}  px-4 py-2 rounded ${hoverColor} mb-2`} >
                {title}
            </button>
        </NavLink>
    )
}

export const NormalButton = ({ bgColor, bgText, hoverColor, title, funcion, dimension = 'px-4 py-2 mb-2 rounded' }) => {
    return (
        <button type="button" onClick={funcion} className={`block mt-0.5  lg:inline-block ${bgColor} ${bgText} ${dimension} ${hoverColor} `} >
            {title}
        </button>
    )
}

export const NormalButton2 = ({ bgColor, bgText, hoverColor, title, dimension = 'px-4 py-2 mb-2 rounded', typeButton='button', disabledButton=false }) => {
    return (
        <button disabled={disabledButton} type={typeButton} className={`block mt-0.5  lg:inline-block ${bgColor} ${bgText} ${dimension} ${hoverColor} `} >
            {title}
        </button>
    )
}
