
export const InputLogin = ({ register, name, nameLabel, valueRequired = true, typeInput = 'text', placeholderInput, errors, classInput = '' }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="block text-sm text-blue-900 font-bold">{nameLabel}</label>
            <input {
                ...register(name, {
                    required: {
                        value: valueRequired,
                        message: 'El campo es requerido'
                    }
                })
            }
                type={typeInput} id={name} placeholder={placeholderInput} className={`${classInput} text-center font-bold block w-full px-4 py-2 text-blue-900 placeholder-gray-300 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
            />
            {errors[name] && <span className='text-red-500'>{errors[name].message}</span>}
        </div>
    )
}
