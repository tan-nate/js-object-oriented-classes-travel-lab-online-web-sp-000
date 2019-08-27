class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date) {
    return parseInt(date, 10) - this.startDate.getFullYear()
  }
}
