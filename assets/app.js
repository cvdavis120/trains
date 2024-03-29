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
        ftt = $("#time-input").val()
        freq = $("#freq-input").val()

        database.ref().push({
            TrainName: name,
            TrainDest: dest,
            Trainftt: ftt,
            TrainFreq: freq,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        $("tbody").empty()
        makeTable(name, dest, ftt, freq)
    })
    database.ref().on("value", function (snapshot) {
        var myArr = Object.values(snapshot.toJSON())
        $("tbody").empty()
        myArr.forEach((x) => {

            let trainName = x.TrainName
            let trainDest = x.TrainDest
            let trainFreq = x.TrainFreq
            let trainFTT = x.Trainftt

            makeTable(trainName, trainDest, trainFreq, trainFTT)
        })
    });


    function makeTable(iname, idest, iftt, ifreq) {

        let name = iname
        let dest = idest
        let ftt = iftt
        let freq = ifreq
        let nextArrive = ""
        let minAway = ""
        nextArrive = nextArr(ftt)
        minAway = minAwayCalc(ftt)
        let newtr = $("<tr></tr>")
        let newth = $("<th></th>")
        newth.attr("scope", "row")
        newth.text(name)
        newtr.prepend(newth)
        let tdA = $("<td></td>")
        let tdB = $("<td></td>")
        let tdC = $("<td></td>")
        let tdD = $("<td></td>")
        tdA.text(dest)
        tdB.text(freq)
        tdC.text(nextArrive)
        tdD.text(minAway)
        newtr.append(tdA)
        newtr.append(tdB)
        newtr.append(tdC)
        newtr.append(tdD)
        $("tbody").prepend(newtr)

    }

    function nextArr() {
        return ("hold")
    }

    function minAwayCalc() {
        return ("hold")
    }

})