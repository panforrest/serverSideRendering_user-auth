// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', function(req, res){
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/auth', function(req, res){
	res.render('auth', null)
})

// router.post('/register', function(req, res){
// 	res.json({
// 		confirmation: 'success',
// 		body: req.body
// 	})
// })

// router.post('/user/:action', function(req, res){
    
// })

module.exports = router
