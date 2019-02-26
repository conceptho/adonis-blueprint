/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const User = use('App/Models/User');

// const { ErrorCodeException } = use('Conceptho/Exceptions');
const TestService = use('App/Services/TestService');

Route.get('/', async () => User.all());

Route.get('/service', () => TestService.query().fetch());
