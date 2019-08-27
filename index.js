class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date) {
    this.startDate.getFullYear() - parseInt(date, 10)
  }
}
