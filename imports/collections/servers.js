import { Mongo } from 'meteor/mongo';

Meteor.methods({
  //add tip function later
  'servers.insert': function (name) {
    const token = Math.random().toString(36).slice(-5);
    Servers.insert({ name, token });
  }
});

export const Servers = new Mongo.Collection('servers');
