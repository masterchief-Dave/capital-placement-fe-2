import { Info, Search } from "lucide-react"
import { useState } from "react"

import './App.css'
import { CandidateList } from './components/CandidateList'
import { Filter } from './components/Filter'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  const [mouseState, setMouseState] = useState<boolean>(false)

  return (
    <div className='flex font-poppins relative'>
      {mouseState && <div className="absolute top-0 left-0 right-0 bottom-0 bg-overlay z-1"></div>}
      <Sidebar />
      <main className='w-full bg-[#F9FAFF] p-[3.2rem]'>
        <div className="mb-[3.2rem]">
          <Header setState={setMouseState} />
        </div>

        <section className='flex items-start gap-[3.2rem]'>
          <div className='basis-[38.5rem] space-y-[2.4rem]'>
            <div className='h-[4.8rem] bg-white px-[1.6rem] w-full flex gap-x-[1rem] items-center'>
              <Search className="h-[2rem] basis-[2rem] text-[#B0BABF]" />
              <input className='flex-grow w-full h-full outline-0 border-none text-[1.4rem] font-normal' placeholder='Search by name,edu,exp or #tag' />
              <Info className="h-[2rem] basis-[2rem] text-[#9AA6AC]" />
            </div>
            <Filter />
          </div>
          <div className='flex-grow'>
            <CandidateList />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
