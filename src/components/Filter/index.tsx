import { SVGProps } from 'react'
import { FileText } from 'lucide-react'


export const Filter = () => {
  const styles = {
    container: `px-[1.6rem] py-[1.8rem] border-b`
  }
  return (
    <div className="rounded-[0.8rem] max-w-[38.5rem] bg-white">
      <div className={`${styles.container} flex items-center justify-between`}>
        <h3 className="text-[1.4rem] font-medium">Filters</h3>
        <p>0 Selected</p>
      </div>
      {['Personal information', 'Education', 'Work Experience', 'Activity Filter', 'Advanced Filter'].map((title) => {
        return <Section title={title} key={title} />
      })}
    </div>
  )
}

const Section = ({ title }: { title: string }) => {
  return (
    <div className={`flex items-center justify-between px-[1.6rem] py-[1.8rem] ${title === 'Advanced Filter' ? '' : 'border-b'}`}>
      <div className='flex items-center gap-x-[0.8rem]'>
        <div className='w-[1.6rem]'>
          <FileText className='w-[1.6rem] h-[1.6rem]' />
        </div>
        <p className='text-[1.4rem] font-normal'>{title}</p>
      </div>
      <IcOutlineKeyboardArrowDown className='h-[1.6rem] w-[1.6rem]' />
    </div>
  )
}


export function IcOutlineKeyboardArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"></path></svg>
  )
}