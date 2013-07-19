var chess = undefined;

function DemoHelper(game_src, game_dst, idx) {
    this.game = game_dst;
    this.idx = idx;
    game_src._helper = this;
    
    this.queueMove = function (game, srcpos, dstpos, promote) {

        console.log(idx+" FW: "+srcpos+" to "+dstpos);
        var move = [srcpos, dstpos, promote];
        move.noforward = true;
        this.game.queueMove(move);
    }
}


function changed() {

    var name = $("#gcombo").val();

    if (name == "new") {
        newGame();
    } else if (name == "two") {
        twoBoards();
    } else if (name == "draughts") {
        new DraughtsBoard(reset());
    } else if (name == "draughts-fen") {
        new DraughtsBoard(reset(), {fen:"B:W18,24,27,28,K10,K15:B12,16,20,K22,K25,K29"});
    } else {
        url = 'pgns/'+name+'.pgn';
        $.get(url, pgnLoaded, "text");
    }
    
    return false;
}

function newGame() {
    new ChessBoard(reset());
}


function pgnLoaded(data) {
    var g_options = { pgn: data };
    var v_options = { hasControls: false };
    new ChessBoard(reset(), g_options, v_options);
}

function reset() {
    $("#content").empty();
    return $("#content");
}

function twoBoards() {

    var pdiv = reset();
    var div1 = $("<div>");
    pdiv.append(div1);

    var div2 = $("<div>");
    pdiv.append(div2);
    
    var g_options = {};
    var v_options = {play: {w:true} };
    var board1 = new ChessBoard(div1, g_options, v_options);

    v_options = {play: {b:true}, flipped:true };
    var board2 = new ChessBoard(div2, g_options, v_options);

    new DemoHelper(board1.game, board2.game, 1);
    new DemoHelper(board2.game, board1.game, 2);
}

jQuery(function($) {

    changed();
//    newGame();
//    twoBoards();
//  loadGame( 'test' );

});

