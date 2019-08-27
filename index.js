class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date) {
    return this.startDate.getFullYear() - parseInt(date, 10)
  }
}
