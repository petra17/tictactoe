$('document').ready(function() {
    var tds = $('td');
    var button = $('#button');
    var player = "X";
    var game = "going";
    var xWin = 0;
    var oWin = 0;

    function checkGame(mark) {
        if ($('#five').html() == mark) {
            if ($('#one').html() == mark && $('#nine').html() == mark) {
                return "over";
            }
            else if ($('#two').html() == mark && $('#eight').html() == mark) {
                return "over";
            }
            else if ($('#three').html() == mark && $('#seven').html() == mark) {
                return "over";
            }
            else if ($('#four').html() == mark && $('#six').html() == mark) {
                return "over";
            }
        }

        else if ($('#seven').html() == mark) {
            if ($('#eight').html() == mark && $('#nine').html() == mark) {
                return "over";
            }
            else if ($('#one').html() == mark && $('#four').html() == mark) {
                return "over";
            }
        }

        else if ($('#three').html() == mark && $('#six').html() == mark && $('#nine').html() == mark) {
            return "over";
        }

        for (i = 0; i < tds.length; i++) {
            if (tds[i].innerText == "") {
                return "going";
            }
        } 

        return "draw";
    };

    function switchPlayer() {
        if (player === "X") {
         $('h2').html("O, it‘s your turn!");
            player = "O";
        }
        else {
            $('h2').html("X, it‘s your turn!");
            player = "X";
        }
    }

    function score() {
        if (player === "X") {
            xWin = (xWin + 1);
            if (xWin == 1) {
                $('#x-winner').html("X has 1 point!");
            }
            else {
                $('#x-winner').html("X has " + xWin + " points!");
            }
        }
        else if (player === "O") {
            oWin = (oWin + 1);
            if (oWin == 1) {
                $('#o-winner').html("O has 1 point!");
            }
            else {
                $('#o-winner').html("O has " + oWin + " points!");
            }
        }
    }

    tds.on('click', function() {
        if(game == "going") {
            if ($(this).html() != "X" && $(this).html() != "O") {
                $(this).html(player);
                $(this).addClass(player);
                game = checkGame(player);

                if (game == "over") {
                    $('h2').html(player + " won!!!");
                    score();
                }

                else if (game == "draw") {
                    $('h2').html("DRAW!!!");
                }

                else if (game == "going") {
                    switchPlayer();
                }
            }
        }   
     });

     button.on('click', function() {
         game = "going";
         winner = "";
         player = "X";
         $('h2').html("X, it‘s your turn!");

        for (i = 0; i < tds.length; i++) { 
            tds[i].innerText = ""; 
        }
        tds.removeClass(["X"]);
        tds.removeClass(["O"]);
     })
});


