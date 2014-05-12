import Message from 'appkit/models/message';

export default Ember.Route.extend({
  // model: function() {
  //   console.log('model');
  // },
  setupController: function(controller, model) {
    console.log('setupController', model);

    controller.set('model', model);
  },

  afterModel: function(one, two) {
    console.log('afterModel', one);

    if (one.subject === undefined) {
      this.transitionTo('messages');
    }
  }
});
