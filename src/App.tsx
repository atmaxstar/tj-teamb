import { useState } from "react";
import Home from "./Home";
import Mypage from "./Mypage"; // 拡張子を省略

function App() {
  const [page, setPage] = useState<"home"|"dashboard"|"mypage">("mypage")

  return (
    <>
      {page === "home" && <Home/>}
      {page === "mypage" && <Mypage/>}
    </>
  )
}

export default App