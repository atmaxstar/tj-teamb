
import { useState } from 'react'
import Home from './Home'
import CalorieWeightChart from './CaloriesWeightChart'
import Record from './Record'
import Footer from './Footer'
import Mypage from "./Mypage";    
import Header from './Header'

export type Page = "home"|"dashboard"|"record"|"mypage"

function App() {
  const [page, setPage] = useState<Page>("record")

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[375px]'>
        <Header page={page} setPage={setPage}/>
        <div className='mt-20 mb-20'>
        {page === "home" && <Home/>}
        {page === "record" && <Record/>}
        {page === "dashboard" && <CalorieWeightChart/>}
        {page === "mypage" && <Mypage/>}
        </div>
        <Footer page={page} setPage={setPage} />
      </div>
    </div>
  )
}

export default App