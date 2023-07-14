import { Tab } from "@headlessui/react"

export const Lash = ({ arrays, children }) => {
    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-1 pt-1 px-1 mx-4 mt-5 mb-3 border-b border-gray-300">
                    {arrays.map((array) => (
                        <Tab
                            key={array.titulo}
                            className={({ selected }) => `w-full py-1 text-xs text-gray-400 font-bold ${selected ? 'text-blue-800 border-b-2 border-blue-800' : 'hover:text-gray-500 hover:border-b-2 hover:border-gray-300 '}`}
                        >
                            {array.titulo}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels className="mt-2">

                    {children}

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}