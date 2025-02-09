import { useState } from 'react'
import Home from './Home'
import Record from './Record'

function App() {
  const [page, setPage] = useState<"home"|"dashboard"|"record">("record")

  return (
    <>
    {page === "home" && <Home/>}
    {page === "record" && <Record/>}
    </>
  )
}

export default App
