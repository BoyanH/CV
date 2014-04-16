'use strict';

musicApp.factory('artistData', function($resource) {

    var resource = $resource('/data/artist/:id', { id: '@id' });

    return {
        getArtist: function(id) {
            return resource.get({id: id});
        },
        saveArtist: function(artist) {
            // window.alert("Saving is disabled for security reasons. Thank you for using Music Artists and have fun! :)")
            if (!artist.id) {
                resource.query().$promise.then(function(data) {
                    artist.id = _.max(data, function(artist){ return artist.id; }).id + 1;
                    resource.save(artist);
                });

            }
            else {
                resource.save(artist);
            }
        },
        getAllArtists: function() {
            return resource.query();
        }
    }

})