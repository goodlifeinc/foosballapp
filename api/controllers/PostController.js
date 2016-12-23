/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    restricted: function( req, res ) {
        return res.ok( 'If you can see this you are authenticated!' );
    },
    open: function( req, res ) {
        return res.ok( 'This action is open!' );
    },
    jwt: function( req, res ) {
        return res.ok( 'You have a JSON web token' );
    }
};

