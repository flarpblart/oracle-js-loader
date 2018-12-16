function fromRadiusDate(dateString) {
    const ms = Date.parse(dateString);
    const date = new Date(ms);
    return date;
}

module.exports = {
    date: { fromRadiusDate }
};