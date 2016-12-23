/**
 * Fixture.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        date: {
            type: 'datetime'
        },
        isAccepted: {
            type: 'boolean'
        },
        homeTeam: {
            model: 'team',
            via: 'homeFixtures'
        },
        awayTeam: {
            model: 'team',
            via: 'awayFixtures'
        },
        result: {
            type: 'string'
        },
        winner: {
            model: 'team'
        }
    }
};

