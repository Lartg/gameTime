module.exports = function (app, models) {

app.get('/', (req, res) => {
  games = {
    1:{
    id: 'test',
    title: 'Title',
    imgUrl: ''
    },
    2:
    {
      id: 'test2',
      title: 'Title2',
      imgUrl: ''
      },
  }
  res.render('games-index', {games: games})
})
app.get('/games/:id', (req, res) => {
  events = 5
  res.render('events-index', {events: events})
})




}

