import { useEffect, useState } from 'react'

// Counts down to a fixed target date/time, e.g. useCountdown('2026-09-18T00:00:00')
export default function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime()

  const getTimeLeft = () => {
    const remaining = Math.max(0, target - Date.now())
    return {
      days: Math.floor(remaining / (24 * 60 * 60 * 1000)),
      hours: Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
      mins: Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000)),
      secs: Math.floor((remaining % (60 * 1000)) / 1000),
      isPast: remaining <= 0,
    }
  }

  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const tick = () => setTime(getTimeLeft())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const pad = (n) => String(n).padStart(2, '0')

  return {
    days: pad(time.days),
    hours: pad(time.hours),
    mins: pad(time.mins),
    secs: pad(time.secs),
    isPast: time.isPast,
  }
}