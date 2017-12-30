// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const React = require('react')
const ReactDOMServer = require('react-dom/server')

//import our own React components
const serverIndex = require('../public/dist/es5/server-index')
const containers = require('../public/dist/es5/components/containers')
const store = require('../public/dist/es5/stores')

router.get('/', function(req, res){
    let initial = {
        user: {
        	currentUser: {
        		username: 'TEST!'
        	}
        }
    }

    const initialState = store.configure(initial)

	const admin = React.createElement(containers.Admin)
	const entry = React.createElement(serverIndex, {component:admin, store:initialState})
	const html = ReactDOMServer.renderToString(entry)
	console.log('HTML: ' + html)

    res.render('index', {
    	react: html,
    	initialState: JSON.stringify(initialState.getState())
    })
	
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
