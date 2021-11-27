import { Menu } from '@headlessui/react'

function User( { user }) {
    return (
      <Menu>
        <Menu.Button className="flex m-3 p-2 mb-0 mt-0 float-right  border-b border-solid border-blueGray-100">User Name <img src="user_icon.png" alt="Icon"></img></Menu.Button>
        <Menu.Items className="clear-both">
          <Menu.Item className="m-3 p-2 mt-0 mb-0 float-right clear-both">
            {({ active }) => (
              <a
                className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                href=""
              >
                aAA
              </a>
            )}
          </Menu.Item>
          <Menu.Item className="m-3 p-2 mt-0 float-right clear-both">
            {({ active }) => (
              <a
                className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                href="/account-settings"
              >
                Log Out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    )
  }

export default User;