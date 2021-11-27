import { Menu } from '@headlessui/react'


function User( { user }) {
    return (
        <div className="w-56 text-right m-1">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="bg-gradient-to-r from-green-400 to-green-500 inline-flex justify-center uppercase font-semibold w-full px-4 py-2 text-xs font-medium text-white rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Username
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="m-1">
                <Menu.Item>
                {({ active } ) => (
                    <button
                    className={`${
                        active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                    Settings
                    </button>
                )}
                </Menu.Item>
                </div>
            </Menu.Items>
          </Menu>
        </div>
      )
    }
    

export default User;