// this factory returns a synchronized array of chat messages
app.factory("getUser", ["$firebaseObject",
    function($firebaseObject) {
        return function(usuari) {
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

            return {nom: $firebaseObject(ref.child(usuari).child("name")),
                desc: $firebaseObject(ref.child(usuari).child("description"))};
        };
    }
]);

app.factory("getUserTweets", ["$firebaseArray",
    function($firebaseArray) {
        return function(usuari) {
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            return $firebaseArray(ref.child(usuari).child("tweets"));
        };
    }
]);

app.factory("getFollowings", ["$firebaseArray",
    function($firebaseArray) {
        return function(usuari) {
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            return $firebaseArray(ref.child(usuari).child("following"));
        };
    }
]);

app.factory("getFollowingTweets", ["$firebaseArray",
    function($firebaseArray) {
        return function(usuari) {
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            return $firebaseArray(ref.child(usuari).child("following"));
        };
    }
]);