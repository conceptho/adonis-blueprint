const { Service } = use('Conceptho/Services');
const User = use('App/Models/User');

class TestService extends Service {}

module.exports = new TestService(User);
