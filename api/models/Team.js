/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        teamName: {
            type: 'string'
        },
        teamMembers: {
            collection: 'user',
            via: 'teams'
        },
        homeFixtures: {
            collection: 'fixture',
            via: 'homeTeam'
        },
        awayFixtures: {
            collection: 'fixture',
            via: 'awayTeam'
        }
    }
};

