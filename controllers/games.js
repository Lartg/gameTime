module.exports = function (app, models) {

app.get('/', (req, res) => {
  res.render('games-index')
})
}