'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('App/Models/User')
const UserService = use('App/Services/User')

Route.group('front', () => {
  Route.on('/').render('welcome')
})

Route.group('api', () => {
  Route.get('/', () => ({ Hello: 'AdonisJs' }))
  Route.get('/users', async () => User.all())
  Route.get('/users/create', async () => {
    const response = await UserService.create({
      model: new User({
        username: `${(new Date()).getTime()}`,
        email: `${(new Date()).getTime()}@email.com`,
        password: `${(new Date()).getTime()}`
      })
    })
    return response.data
  })
}).prefix('v1')
