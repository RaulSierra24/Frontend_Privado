export const CircleTabs = ({ children, tab, title }) => {

    return (
        <>
            <div className='flex justify-center w-full mb-5'>

                <div className={`${title === undefined ? 'w-[105px]' : 'w-9'} h-9 rounded-full text-lg flex items-center justify-center  ${tab >= 0 ? 'text-white bg-blue-900' : 'text-gray-400 bg-white border-2 border-gray-200'} `}>
                    <span className="text-center absolute w-full">
                        <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                        </svg>
                    </span>
                    <div className='relative sm:top-8 top-7 font-bold text-blue-900 whitespace-nowrap text-xs sm:text-lg'>{title}</div>
                </div>
                {children}
            </div>
        </>
    )
}

export const CircleTab = ({ tab, title, valor }) => {
    return (
        <div className='flex items-center justify-end w-1/4'>
            <div className={`absolute w-9 h-9 mx-auto  rounded-full text-lg flex items-center justify-center ${tab >= valor ? 'text-white bg-blue-900' : 'text-gray-400 bg-white border-2 border-gray-200'} `}>
                <span className="text-center w-full">
                    <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path className="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                    </svg>
                </span>
                <div className={`absolute sm:top-9 top-10 font-bold ${tab >= valor ? 'text-blue-900' : 'text-gray-400'} whitespace-nowrap text-xs sm:text-lg`}>{title}</div>
            </div>
            <div className="bg-white rounded h-4 w-full" >
                <div
                    className="bg-blue-900 rounded h-4 text-center"
                    style={{ width: tab >= valor ? '100%' : '0%', transition: '1s' }}
                />
            </div >

        </div>
    )
}
