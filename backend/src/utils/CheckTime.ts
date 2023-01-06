class CheckTime {
  dayPassed(savedDate: number): boolean {
    const currentDate = new Date().getTime();
    const result = currentDate - savedDate;
    const hoursPassed = this.getHours(result);
    if (hoursPassed >= 24) {
      return true;
    }
    return false;
  }
  getHours(ms: number): number {
    const hours = Number((ms / (1000 * 60 * 60)).toFixed(1));
    return hours;
  }
}

export default new CheckTime();
