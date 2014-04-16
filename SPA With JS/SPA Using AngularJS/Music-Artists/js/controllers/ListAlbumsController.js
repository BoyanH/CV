'use strict';

musicApp.controller('ListAlbumsController',
    function ListAlbumsController($scope, $routeParams, artistData, userData, $rootScope) {

        if ($routeParams.artist) {
            $scope.search = $routeParams.artist;
        };

        artistData
            .getAllArtists()
            .$promise
            .then(function (artists) {
                var allAlbums = [];
                for (var i = 0; i < artists.length; i++) {
                    var albums = artists[i].albums;
                    if (albums) {
                        for (var j = 0; j < albums.length; j++) {
                            albums[j].artist = artists[i].name;
                            albums[j].artistId = artists[i].id;
                            allAlbums.push(albums[j]);
                        }
                    }
                }

                $scope.albums = allAlbums;
            });

        $scope.upAlbumRating = upAlbumRating;
        $scope.downAlbumRating = downAlbumRating;

        function upAlbumRating(album) {
            
            var cookieName = album.name + album.id;
            
            artistData.getArtist(album.artistId).$promise
                .then(function(data) {
                    var artist = data;
                    
                    userData.getUserForm($rootScope.userName).$promise
                        .then(function (data) {

                            if(cookies.read(cookieName) !== "upvoted") {

                            var user = data;
                            user.downvotes = user.downvotes || 0;
                            user.upvotes = user.upvotes || 0;

                            if(cookies.read(cookieName) == "downvoted") {

                                album.rating += 2;
                                cookies.create(cookieName, "upvoted", { expires: 365 * 10 });

                                artist.albums[album.id -1] = album;
                                artistData.saveArtist(artist);

                                user.downvotes--;
                                user.upvotes++;
                            }
                                else {

                                    album.rating++;
                                    cookies.create(cookieName, "upvoted", { expires: 365 * 10 });

                                    artist.albums[album.id -1] = album;
                                    artistData.saveArtist(artist);

                                    user.upvotes++;
                                }

                            album.error = "";
                            userData.editUser(user);
                            $rootScope.user = user;
                        }
                            else{
                                album.error = "You already upvoted this album!";
                            }


                        }, function (err) {
                            console.error(err);
                        });

                }, function(err) {

                        console.error(err);
                    });

        }

        function downAlbumRating(album, artistId) {

            if (album.rating > 0) {
                
                var cookieName = album.name + album.id;
                
                artistData.getArtist(album.artistId).$promise
                    .then(function(data) {

                        var artist = data;
                        userData.getUserForm($rootScope.userName).$promise
                        .then(function (data) {

                            if(cookies.read(cookieName) !== "downvoted") {

                            var user = data;
                            user.downvotes = user.downvotes || 0;
                            user.upvotes = user.upvotes || 0;

                            if(cookies.read(cookieName) == "upvoted") {
                                if (album.rating >= 2) {
                                    album.rating -= 2;
                                    cookies.create(cookieName, "downvoted", { expires: 365 * 10 });

                                    artist.albums[album.id -1] = album;
                                    artistData.saveArtist(artist);

                                    user.upvotes--;
                                    user.downvotes++;
                                }
                                    else {
                                        album.rating --;
                                        cookies.create(cookieName, "", { expires: 365 * 10 });

                                        artist.albums[album.id -1] = album;
                                        artistData.saveArtist(artist);

                                        user.upvotes--;
                                    }

                            }
                                else {

                                    album.rating--;
                                    user.downvotes++;
                                    cookies.create(cookieName, "downvoted", { expires: 365 * 10 });

                                    artist.albums[album.id -1] = album;
                                    artistData.saveArtist(artist);
                                }

                            album.error = "";
                            userData.editUser(user);
                            $rootScope.user = user;
                        }
                            else{
                                album.error = "You already downvoted this album!";
                            }

                        }, function (err) {
                            console.error(err);
                        });
                    
                    }, function(err) {

                        console.error(err);
                    });

            }

        }
    }
);