import { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

import { items } from './items'
import { menuItems } from '../../globals/menu'



const Menu: React.FC = () => {
  const [active, setActive] = useState(3)


  const onClick: MenuProps['onClick'] = ({ key }) => {
    // message.info(`Click on item ${key}`)
    const index = parseInt(key)
    setActive(index - 1)
  }

  return (
    <div className='border w-[32rem] h-[4rem] rounded-[1.6rem] font-poppins shadow-menu-dropdown'>
      <Dropdown menu={{ items, selectable: true, onClick, defaultSelectedKeys: ['4'] }} className='w-full'>
        <a onClick={
          (e) => {
            e.preventDefault()
          }
        }
          className='w-full h-full'
        >
          <Space className='w-full flex items-center justify-between px-[1.6rem] py-[0.8rem]'>
            <p className='text-[1.6rem] font-medium text-[#1D4ED8]'>
              {menuItems?.[active]}
            </p>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div >
  )
}

export default Menu