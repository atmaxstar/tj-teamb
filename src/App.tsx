import { useState } from 'react'
import Home from './Home'
import CalorieWeightChart from './CaloriesWeightChart'
import Record from './Record'
import Footer from './Footer'

function App() {
  const [page, setPage] = useState<"home"|"dashboard"|"record">("record")

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[375px]'>
        {page === "home" && <Home/>}
        {page === "record" && <Record/>}
        {page === "dashboard" && <CalorieWeightChart/>}
        <Footer page={page} setPage={setPage} />
      </div>
    </div>
  )
}

export default App
