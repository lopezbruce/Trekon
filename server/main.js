import { Meteor } from 'meteor/meteor';
import { Servers } from '../imports/collections/servers';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('servers', function() {
    return Servers.find({});
  });
});
