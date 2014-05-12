var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {

  this.route('journal');
  this.resource('messages', function() {
    this.route('message', { path: '/message/:id'});
  });

  this.route('component-test');
  this.route('helper-test');
});

export default Router;
