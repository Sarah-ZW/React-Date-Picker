import { useState } from "react"
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns"
import { DateFact } from "./DateFact"


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
      <div className="date-fact">
      {value == null ? "Once you pick a date, we'll show you a cool fact about that date right here" : <DateFact value = {value} />}
      </div>
      </>
  )
}

function DatePickerModal({ value, onChange }) {
  const [currentMonth, setCurrentMonth] = useState(value || new Date())

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  })

  const addMonth = () => {
    setCurrentMonth((currentMonth) => {
      return addMonths(currentMonth, 1)
    })
  }

  const subtractMonth = () => {
    setCurrentMonth((currentMonth) => {
      return addMonths(currentMonth, -1)
    })
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          onClick={subtractMonth}
          className="prev-month-button month-button"
        >
          &larr;
        </button>
        <div className="current-month">
          {format(currentMonth, "MMM - yyyy")}
        </div>
        <button onClick={addMonth} className="next-month-button month-button">
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((displayDate) => (
          <button
          onClick={() => onChange(displayDate)}
            className={`date ${
              isSameMonth(currentMonth, displayDate) ||
              "date-picker-other-month-date"
            } ${isSameDay(value, displayDate) && "selected"}`}
            key={displayDate.toDateString()}
          >
            {displayDate.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}
