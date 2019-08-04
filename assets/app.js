$("document").ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCinqIWer0uZUR_ozX5dY5TXnmrfBARGCE",
        authDomain: "trains-a5f37.firebaseapp.com",
        databaseURL: "https://trains-a5f37.firebaseio.com",
        projectId: "trains-a5f37",
        storageBucket: "",
        messagingSenderId: "786487247431",
        appId: "1:786487247431:web:9c0e48e87078473f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var name = ""
    var dest = ""
    var freq = ""
    var ftt = ""
    // Submit a new train
    $("#add-train").on('click', () => {


        event.preventDefault();

        name = $("#name-input").val()
        dest = $("#dest-input").val()
        ftt = $("#ftt-input").val()
        freq = $("#freq-input").val()
        database.ref().push({
            TrainName: name,
            TrainDest: dest,
            Trainftt: ftt,
            TrainFreq: freq,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    })




})