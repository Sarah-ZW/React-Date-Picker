import { useEffect, useState } from "react"

export function DateFact({ value }) {
  const [numberFact, setNumberFact] = useState("")

  useEffect(() => {
    const chosenMonth = value.getMonth() + 1
    const chosenDay = value.getDate()
    const chosenDate = `${chosenMonth}/${chosenDay}`

    fetch(`http://numbersapi.com/${chosenDate}/date`)
      .then((res) => {
        if (res.status === 200) {
          return res.text()
        }
        return Promise.reject(res)
      })
      .then(setNumberFact)
  }, [value])

  return (
    <>
      <p>{numberFact}</p>
    </>
  )
}
