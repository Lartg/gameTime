module.exports = function (app, models) {

// READ
app.get('/', (req, res) => {
  models.Game.findAll().then(games => {
  res.render('games-index', {games: games})})
})

app.get('/games/:id', (req, res) => {
  const game = req.params.id
  models.Event.findAll({
   where: {
    GameId: game
   }
  }).then(events => {
    res.render('events-index', {events: events, game: game})
  }).catch((err) => {
    console.log(err)
  });
})
  //event
  app.get('/event/:id', (req, res) => {
    models.Event.findByPk(req.params.id).then(event => {
      res.render('view-event', {event: event})
    })
    
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
    models.Event.create({
      title: req.body.title,
      desc: req.body.desc,
      players: req.body.players,
      seats: req.body.players,
      UserId: req.user.id,
      GameId: req.params.id
    }).then(event => {
      res.redirect(`/games/${event.GameId}`)
    }).catch((err) => {
      console.log(err)
    });
  })


// DESTROY
  // GAMES
  app.delete('/games/delete/:id', (req, res) => {
    models.Game.findByPk(req.params.id).then(game => {
      game.destroy();
      res.redirect(`/`);
    }).catch((err) => {
      console.log(err);
    });
  })



  // EVENTS
  app.get('/event/delete/:id', (req, res) => {
    models.Event.findByPk(req.params.id).then(event => {
      event.destroy();
      res.redirect(`/`);
    }).catch((err) => {
      console.log(err);
    });
  })

  // Join Event
  app.get('/event/addPlayer/:id', (req, res) => {
    models.Event.findByPk(req.params.id).then(event => {
      seats = event.seats
      event.set({seats: seats-1}).save().then(
        res.redirect(`/event/${req.params.id}`)
      )
    }).catch((err) => {
      console.log(err);
    });
  })
}
