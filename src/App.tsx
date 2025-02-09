import { useState } from 'react'
import Home from './Home'
import CalorieWeightChart from './CaloriesWeightChart'
import Record from './Record'
import Footer from './Footer'
import Mypage from "./Mypage";    
import { ProfileData } from './types/Profile.type'
import Header from './Header'

export type Page = "home"|"dashboard"|"record"|"mypage"

interface ProfileDataPerDay {
  [key : number]: ProfileData;
}

function App() {
  const [page, setPage] = useState<Page>("record")
  const [dataPerDay, setDataPerDay] = useState<ProfileDataPerDay>({})

  const setData = (data: ProfileDataPerDay, date: number) => {
    setDataPerDay(prev => {
      return {
        ...prev,
        date: data
      }
    })
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[375px]'>
<<<<<<< HEAD
        {page === "home" && <Home dataPerDay={dataPerDay} setData={setData}/>}
=======
        <Header page={page} setPage={setPage}/>
        <div className='mt-20 mb-20'>
        {page === "home" && <Home/>}
>>>>>>> c2b3ebfc230965845fa06e4b45d8c1ec846e2447
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