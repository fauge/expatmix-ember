import Message from 'appkit/models/message';

export default Ember.Route.extend({
model: function() {
  return [
  Message.create({
    id: 1,
              date: '18/06/2014',
              subject: 'Yeah',
              content: 'coucou'
          }),
          Message.create({
            id: 2,
                      date: '18/07/2014',
                      subject: 'Yeah2',
                      content: 'coucou2'
                  }),
                  Message.create({
                    id: 3,
                              date: '18/08/2014',
                              subject: 'Yeah3',
                              content: 'coucou3'
                          })
  ];

}

});
