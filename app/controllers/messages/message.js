export default Ember.Controller.extend({
  model: null,

  actions: {
    delete: function() {
      console.log('delete');
      this.transitionToRoute('messages');
    }
  }
});
