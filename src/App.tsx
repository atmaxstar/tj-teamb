import { useState } from 'react'
import Home from './Home'

function App() {
  const [page, setPage] = useState<"home"|"dashboard">("home")

  return (
    <>
    {page === "home" && <Home/>}
    {page === "dashboard" && <CalorieWeightChart/>}
    </>
  )
}

export default App
