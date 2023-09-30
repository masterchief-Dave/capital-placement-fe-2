import { ChevronDown } from 'lucide-react'

import Mail from '../../assets/header/Mail.svg'
import Tag from '../../assets/header/tag.svg'
import UserCheck from '../../assets/header/User_Check.svg'
import UserClose from '../../assets/header/User_Close.svg'
import UserVoice from '../../assets/header/User_Voice.svg'
import Menu from '../Menu'

export const Header = () => {

  return (
    <header className="flex items-center justify-between max-h-[5.6rem]">
      <div className="basis-[38.5rem]">
        <h1 className="font-semibold text-[#1D4ED8] text-[2rem] leading-normal">London Intenship Programme</h1>
        <h4 className="text-[1.2rem] text-[#0B0B0B] font-light">London</h4>
      </div>
      <div className="basis-[87.7rem] flex-grow flex justify-between items-start">
        <div className="flex-grow flex justify-center">
          <div className='w-[32rem]'>
            <Menu />
          </div>
        </div>
        <div className='basis-[47.8rem] flex items-center gap-x-[1.6rem]'>
          <div className="flex items-center gap-x-[0.8rem]">
            {[Tag, UserClose, UserCheck, UserVoice, Mail].map((icon, index) => {
              return <Icon icon={icon} key={index} />
            })}
          </div>
          <button className='rounded-[0.8rem] bg-[#1D5ECD] text-white h-[4rem] flex items-center w-[23rem] divide-x divide-white'>
            <span className='flex-grow h-full flex items-center justify-center text-[1.3rem] font-normal'>Move To Video Interview</span>
            <span className='basis-[3.5rem] h-full flex items-center justify-center'>
              <ChevronDown className='w-[1.6rem] h-[1.6rem]' />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}


const Icon = ({ icon }: { icon: string }) => {
  return (
    <div className="h-[4rem] w-[4rem] border rounded-[.8rem] p-[0.8rem] shadow-header-icons-container">
      <img src={icon} alt="header-icon" className="w-full h-full object-contain" />
    </div>
  )
}