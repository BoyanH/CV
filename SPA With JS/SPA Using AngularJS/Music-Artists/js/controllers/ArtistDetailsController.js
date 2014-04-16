'use strict';

musicApp.controller('ArtistDetailsController',
    function ArtistDetailsController($scope, $rootScope, $routeParams, $location, artistData, userData) {

        $scope.artist = artistData.getArtist($routeParams.id);

        $scope.bandMembersShown = false;
        $scope.bandMembersShowText = 'Show';
        $scope.showAndHideMembers = showAndHideBandMembers;

        $scope.bandMembers = "band-members";
        $scope.evenBandMembers = "even-band-members";
        $scope.addMember = addBandMember;

        $scope.customStyle = {
            fontWeight: 'bold'
        }

        $scope.albumsShown = false;
        $scope.albumsShowText = 'Info';
        $scope.showAndHideAlbums = showAndHideAlbums;

        $scope.upAlbumRating = upAlbumRating;
        $scope.downAlbumRating = downAlbumRating;

        $scope.sort = 'id';

        $scope.addAlbum = addAlbum;

        function addAlbum() {
            $location.path('/artist-details/' + $routeParams.id + '/add-album');
        }

        function upAlbumRating(album) {
            
            var cookieName = album.name + album.id;

            if(cookies.read(cookieName) !== "upvoted") {

                userData.getUserForm($scope.userName).$promise
                    .then(function(data) {

                        var user = data;
                        user.downvotes = user.downvotes || 0;
                        user.upvotes = user.upvotes || 0;

                        if(cookies.read(cookieName) == "downvoted") {

                            album.rating += 2;
                            cookies.create(cookieName, "upvoted", { expires: 365 * 10 });

                            artistData.saveArtist($scope.artist);

                            user.downvotes--;
                            user.upvotes++;
                        }
                            else {

                                album.rating++;
                                cookies.create(cookieName, "upvoted", { expires: 365 * 10 });

                                artistData.saveArtist($scope.artist);

                                user.upvotes++;
                            }

                        $scope.error = "";
                        userData.editUser(user);
                        $rootScope.user = user;


                    }, function(err) {
                        console.error(err);
                    });
            }
                else{
                    $scope.error = "You already upvoted this album!";
                }
        }

        function downAlbumRating(album) {

            if (album.rating > 0) {
                
                var cookieName = album.name + album.id;

                if(cookies.read(cookieName) !== "downvoted") {

                    userData.getUserForm($rootScope.userName).$promise
                        .then(function (data) {

                            var user = data;
                            user.downvotes = user.downvotes || 0;
                            user.upvotes = user.upvotes || 0;

                            if(cookies.read(cookieName) == "upvoted") {
                                if (album.rating > 1) {
                                    album.rating -= 2;
                                    cookies.create(cookieName, "downvoted", { expires: 365 * 10 });

                                    artistData.saveArtist($scope.artist);

                                    user.upvotes--;
                                    user.downvotes++;
                                }
                                    else {
                                        album.rating --;
                                        cookies.create(cookieName, "", { expires: 365 * 10 });

                                        artistData.saveArtist($scope.artist);

                                        user.upvotes--;
                                    }

                            }
                                else {

                                    album.rating--;
                                    user.downvotes++;
                                    cookies.create(cookieName, "downvoted", { expires: 365 * 10 });

                                    artistData.saveArtist($scope.artist);
                                }

                            $scope.error = "";
                            userData.editUser(user);
                            $rootScope.user = user;

                        }, function(err) {
                            console.error(err);
                        });
                    
                }
                    else{
                        $scope.error = "You already downvoted this album!";
                    }
            }

        }

        function showAndHideAlbums() {
            if ($scope.albumsShown == false) {
                $scope.albumsShowText = 'Hide';
                $scope.albumsShown = true;
            }
            else {
                $scope.albumsShowText = 'Info';
                $scope.albumsShown = false;
            }
        }

        function showAndHideBandMembers() {
            if ($scope.bandMembersShown == false) {
                $scope.bandMembersShowText = 'Hide';
                $scope.bandMembersShown = true;
            }
            else {
                $scope.bandMembersShowText = 'Show';
                $scope.bandMembersShown = false;
            }
        }

        function addBandMember(artist, newMember) {
            if (!artist.additionalInformation.bandMembers) {
                artist.additionalInformation.bandMembers = [];
            }

            artist.additionalInformation.bandMembers.push(newMember);
            artistData.saveArtist(artist);
        }
    }
);