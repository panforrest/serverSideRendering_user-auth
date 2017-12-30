import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import { Admin } from './components/containers'

const app = (
	<Provider store={store.configure(null)}>
		<Admin />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))