import type { MenuProps } from 'antd'

const styles = {
  label: `flex h-[7.2rem] font-poppins py-[0.8rem] px-[1.6rem] items-center justify-between`,
  amount: `text-[1.4rem] px-[1.6rem] rounded-[1.6rem] bg-[#F8F8F8] text-[#444]`
}

export const items: MenuProps['items'] = [
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
      <div className={`${styles.label}`}>
        <p className='text-[1.6rem]'>Opportunity Browsing</p>
        <span className={styles.amount}>243</span>
        {/* <span className='bg-[#D1DDFF] text-[1.4rem] px-[1.6rem] rounded-[1.6rem]'>243</span> */}
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
