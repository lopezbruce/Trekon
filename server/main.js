import { Meteor } from 'meteor/meteor';
import { Servers } from '../imports/collections/servers';
//import { Tips } from '../imports/collections/tips';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('servers', function() {
    return Servers.find({});
  });

  /*Meteor.publish('tips', function() {
    return Tips.find({});
  });*/
});
