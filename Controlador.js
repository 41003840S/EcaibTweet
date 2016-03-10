app.controller('Controlador', ["$scope", "getUser", "getUserTweets", "getFollowings", "getFollowingTweets",
    function($scope, getUser, getUserTweets, getFollowings, getFollowingTweets) {

        $scope.setUser = function() {
            $scope.userId = $scope.usuari;
            $scope.usuari = "";
            var dades = getUser($scope.userId);
            $scope.userName = dades.nom;
            $scope.userDesc = dades.desc;
            $scope.userTweets = getUserTweets($scope.userId);
            $scope.followings = getFollowings($scope.userId);
            $scope.followingTweets = getFollowingTweets($scope.userId);
        };

        $scope.tweet = function() {
            $scope.userTweets.$add({text: $scope.tweetTxt});
            $scope.tweetTxt = "";
        }

        $scope.follow = function() {
            $scope.followings.$add({idUser: $scope.usuari2Follow});
            $scope.usuari2Follow = "";
        }
    }]);


/*    function($scope, chatMessages) {
        $scope.user = "Manu";
        // we add chatMessages array to the scope to be used in our ng-repeat
        // a method to create new messages; called by ng-submit
        $scope.addMessage = function() {
            // calling $add on a synchronized array is like Array.push(),
            // except that it saves the changes to our database!
            $scope.messages.$add({
                user: $scope.user,
                text: $scope.message
            });
            // reset the message input
            $scope.message = "";
        };

        // if the messages are empty, add something for fun!
        $scope.messages.$loaded(function() {
            if ($scope.messages.length === 0) {
                $scope.messages.$add({
                    user: "Firebase Docs",
                    text: "Hello world!"
                });
            }
        });
    }
]);*/
