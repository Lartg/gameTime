module.exports = function (app, models) {

// READ
app.get('/', (req, res) => {
  models.Game.findAll().then(games => {
  res.render('games-index', {games: games})})
})

app.get('/games/:id', (req, res) => {
  models.Event.findAll({
   where: {
    GameId: req.params.id
   }
  }).then(events => {
    res.render('events-index', {events: events, game: req.params.id})
  }).catch((err) => {
    console.log(err)
  });
})

// CREATE

  //Games

  app.get('/new/game', (req, res) => {
    res.render('game-form')
  })

  app.post('/new/game', (req, res) => {
    models.Game.create(req.body).then(game => {
      res.redirect(`/games/${game.id}`)
    }).catch((err) => {
      console.log(err)
    });
  })


  //Events
  app.get('/games/:id/event/new', (req, res) => {
    res.render('event-form', {game: req.params.id})
  })
  app.post('/games/:id/event/new', (req, res) => {
    const gameId = req.params.id
    models.Event.create(
      title = req.body.title,
      desc = req.body.desc,
      players = req.body.players,
      UserId = req.user.id,
      GameId = gameId
      ).then(
      res.redirect(`/games/${gameId}`)
    ).catch((err) => {
      console.log(err)
    });
  })






// DESTROY



}

