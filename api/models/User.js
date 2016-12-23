/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

    attributes: require( 'waterlock' ).models.user.attributes( {

    /* e.g.
    nickname: 'string'
    */
        teams: {
            collection: 'team',
            via: 'teamMembers'
        },

        userName: {
            type: 'string'
        }

    } ),

    beforeCreate: require( 'waterlock' ).models.user.beforeCreate,
    beforeUpdate: require( 'waterlock' ).models.user.beforeUpdate
};
