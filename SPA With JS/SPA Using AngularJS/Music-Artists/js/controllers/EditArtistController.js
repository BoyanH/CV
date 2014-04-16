'use strict';

musicApp.controller('EditArtistController',
    function EditArtistController($scope, $location, $anchorScroll, $templateCache, $routeParams, artistData, $timeout, focus) {

        var url = '/success/Artist',
            albums = albums || [],
            bandMembers = bandMembers || [];

        focus('artistName');

        if ($routeParams.id) {
            url ='/artist-details/' + $routeParams.id;
            $scope.artist = artistData.getArtist($routeParams.id);
        }

        $scope.addAlbum = function(album, newAlbumForm) {

            if (newAlbumForm.$valid) {

                albums.push(album);
                $scope.albumViews = _.pluck(albums, "name"); 
                document.getElementById("newAlbumForm").reset();
            }
        }

        $scope.addBandMember = function(bandMember, newMemberForm) {

            if (newMemberForm.$valid) {

                bandMembers.push(bandMember);
                $scope.bandMembers = bandMembers;
                $templateCache.removeAll();
                document.getElementById("bandmember").value = "";      
            }
        }

        $scope.saveArtist = function(artist, newArtistForm) {

            if (newArtistForm.$valid) {

                artist.albums = [];
                artist.bandMembers = [];

                for(var j=0; j<albums.length; j++) {

                    artist.albums.push(albums[j]);
                }

                for(var i=0; i<bandMembers.length; i++) {

                    artist.bandMembers.push(bandMembers[i]);
                }

                artistData.saveArtist(artist);
                $templateCache.removeAll();
                $location.path(url);
            }

                else {
                    $scope.error = "Please fill all the fields with mark ' * ' ";
                }
        }

        $scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.cancelAlbum = function() {
            document.getElementById("newAlbumForm").reset();
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }
    }
);