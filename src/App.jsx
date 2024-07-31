
import { useState } from "react"
import "../src/styles.css"  
import { Calendar } from "./Calendar"
import { Header } from "./Header"

function App() {
const [value, setValue] = useState()

  return (
    <>
    <Header />
    <Calendar value={value} onChange={setValue} />
    </>
  )
}

export default App
