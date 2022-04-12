export default class DateActual {
  constructor(date, hours) {
    this.date = document.querySelector(date)
    this.hours = document.querySelector(hours)
  }

  get _date() {
    return new Date()
  }

  get _year() {
    return this._date.getFullYear()
  }

  get _mounth() {
    return this._date.getMonth()
  }

  get _day() {
    return this._date.getDate()
  }

  get _hours() {
    return this._date.getHours()
  }

  get _minutes() {
    return this._date.getMinutes()
  }

  get _seconds() {
    return this._date.getSeconds()
  }

  totalDate() {
    const year = this._year
    const mounth = this._mounth
    const day = this._day
    const hours = this._hours
    const minutes = this._minutes
    const seconds = this._seconds

    return {
      year,
      mounth,
      day,
      hours,
      minutes,
      seconds,
    }
  }

  setDateInHTML() {
    const { year, mounth, day } = this.totalDate()

    if (mounth < 9)
      this.date.innerText = `${'0' + (mounth + 1)} / ${day} / ${year}`
    else this.date.innerText = `${mounth + 1} / ${day} / ${year}`
  }

  setHoursInHTML() {
    let { hours, minutes, seconds } = this.totalDate()

    setInterval(() => {
      seconds++

      if (seconds > 59) {
        seconds = 0
        minutes++
      }

      if (minutes > 59) {
        minutes = 0
        hours++
      }

      if (hours > 23) {
        hours = 0
      }

      this.formatHours(hours, minutes, seconds)
    }, 1000)
  }

  formatHours(hours, minutes, seconds) {
    if (hours < 10) {
      hours = `0${hours}`
    } else {
      hours = hours
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    } else {
      minutes = minutes
    }
    if (seconds < 10) {
      seconds = `0${seconds}`
    } else {
      seconds = seconds
    }
    this.hours.innerText = `${hours} : ${minutes} : ${seconds}`
  }

  init() {
    this.setDateInHTML()
    this.setHoursInHTML()
  }
}
