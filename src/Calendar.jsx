import { useState } from "react"
import { DatePickerModal } from "./DatePickerModal"
import { DateFact } from "./DateFact"
import { format } from "date-fns"

export function Calendar({ value, onChange }) {
  const [openCalendar, setOpenCalendar] = useState(false)

  const openCloseButton = () => {
    setOpenCalendar((openCalendar) => !openCalendar)
  }

  return (
    <>
      <div className="date-picker-container">
        <button onClick={openCloseButton} className="date-picker-button">
          {value == null ? "Select a Date" : format(value, "LLL do, yyyy ")}
        </button>
        {openCalendar && <DatePickerModal value={value} onChange={onChange} />}
      </div>
      <div className={`date-fact ${openCalendar && 'pushDown'}` }>
        {value == null ? (
          "Once you pick a date, you'll see a cool fact about that date in history"
        ) : (
          <DateFact value={value} openCalendar={openCalendar} />
        )}
      </div>
    </>
  )
}
