import AvatarFrame from '../../assets/avatar-frame.svg'
import Settings from '../../assets/settings.svg'
import { sidebarIcons } from '../../globals/sidebar'

export const Sidebar = () => {

  return (
    <div className="bg-white w-[7.2rem] p-[2.4rem] h-screen flex flex-col items-center justify-between gap-[3.2rem] shadow-sidebar-box-shadow sticky top-0 left-0">
      <div className='flex flex-col gap-[3.2rem] items-center'>
        <div className="w-[4.8rem] h-[4.8rem] bg-white border flex items-center justify-center">
          <img src={AvatarFrame} alt='avatar frame' className='object-cover' />
        </div>

        <div className='flex flex-col gap-[3.2rem]'>
          {sidebarIcons.map(({ icon, name }, index) => {
            return (
              <div
                key={index}
                className={`rounded-[.8rem] ${name === 'home' ? 'bg-[#E9EFFF]' : ''} hover:bg-[#E9EFFF] cursor-pointer`}
              >
                <div className='w-[4.8rem] h-[4.8rem] flex items-center justify-center'>
                  {icon()}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='flex flex-col items-center gap-[2.4rem]'>
        <div className='w-[4.8rem] h-[4.8rem] hover:bg-[#E9EFFF] cursor-pointer rounded-[0.8rem]'>
          <img src={Settings} className='w-[4.8rem] h-[4.8rem] object-contain' />
        </div>

        <div className='bg-[#D7E5FD] rounded-[10rem] flex items-center justify-center w-[2.4rem] h-[2.4rem]'>
          <p className='text-[#B1CDFD] font-semibold'>AS</p>
        </div>
      </div>
    </div>
  )
}
