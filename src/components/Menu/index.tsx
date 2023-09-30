import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message, Space } from 'antd'

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const styles = {
  label: `flex h-[7.2rem] font-poppins py-[0.8rem] px-[1.6rem] items-center justify-between`,
  amount: `text-[1.4rem] px-[1.6rem] rounded-[1.6rem] bg-[#F8F8F8] text-[#444]`
}

const items: MenuProps['items'] = [
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Applied</p>
        <span className={styles.amount}>1745</span>
      </div>
    ),
    key: '1',
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Shortlisted</p>
        <span className={styles.amount}>453</span>
      </div>
    ),
    key: '2',
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Technical Interview</p>
        <span className={styles.amount}>123</span>
      </div>
    ),
    key: '3',
  },
  {
    label: (
      <div className={`${styles.label} text-[#1D4ED8] font-medium bg-[#EDF2FF]`}>
        <p className='text-[1.6rem]'>Opportunity Browsing</p>
        <span className='bg-[#D1DDFF] text-[1.4rem] px-[1.6rem] rounded-[1.6rem]'>243</span>
      </div>
    ),
    key: '4'
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Video Interview 1</p>
        <span className={styles.amount}>25</span>
      </div>
    ),
    key: '5'
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Video Interview II</p>
        <span className={styles.amount}>25</span>
      </div>
    ),
    key: '6'
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Video Interview III</p>
        <span className={styles.amount}>25</span>
      </div>
    ),
    key: '7'
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Offer</p>
        <span className={styles.amount}>175</span>
      </div>
    ),
    key: '8'
  },
  {
    label: (
      <div className={styles.label}>
        <p className='text-[1.6rem]'>Withdrawn</p>
        <span className={styles.amount}>175</span>
      </div>
    ),
    key: '9'
  }
]

const Menu: React.FC = () => (
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
            Opportunity Browsing
          </p>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  </div >
)

export default Menu