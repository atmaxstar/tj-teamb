
import { useState } from 'react'
import Home from './Home'
import CalorieWeightChart from './CaloriesWeightChart'
import Record from './Record'
import Footer from './Footer'
import Mypage from "./Mypage";    

export type Page = "home"|"dashboard"|"record"|"mypage"

function App() {
  const [page, setPage] = useState<Page>("record")

  return (
    <div className='w-full flex justify-center pb-20'>
      <div className='w-[375px]'>
        {page === "home" && <Home/>}
        {page === "record" && <Record/>}
        {page === "dashboard" && <CalorieWeightChart/>}
        {page === "mypage" && <Mypage/>}
        <Footer page={page} setPage={setPage} />
      </div>
    </div>
  )
}

export default App