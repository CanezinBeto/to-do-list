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

    if (mounth < 10)
      this.date.innerText = `${'0' + (mounth + 1)} / ${day} / ${year}`
    else this.date.innerText = `${mounth + 1} / ${day} / ${year}`
  }

  setHoursInHTML() {
    let { hours, minutes, seconds } = this.totalDate()

    setInterval(() => {
      seconds += 1
    }, 1000)
    this.hours.innerText = `${hours} : ${minutes} : ${seconds}`
  }

  init() {
    this.setDateInHTML()
    this.setHoursInHTML()
  }
}
