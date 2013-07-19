jsboard
=======

This is a (fancy?) HTML/javascript board for chess and checkers.

It can show a position (using FEN), replay a chess game (from PGN)
or let you select valid moves. It can also forward your move to a
javascript helper for online games (waiting for some server-side work)

See how it behaves in [the demo page](http://aurelien-naldi.github.io/jsboard/)

Credits
-------

* It started as a fork of [jchess](https://github.com/bmarini/jchess) but I ended up rewriting everything but (parts of) the PGN parser.
* Piece images come from [Wikimedia](http://commons.wikimedia.org/wiki/Category:SVG_chess_pieces).
* It was inspired by the look of [Chess By Post](http://www.jeffcole.org/chessbypost/). The PGN parser was fixed to handle CBP's PGN export.


TODO
----

* Fix corner cases where move selection will not work
* Detect and report check, checkmate and stalemate
* Build a light server (using node.js??) for actual online game
* Position editor mode
* PGN export
* Show comments in replay mode
* Extend it to play Go and reversi
* actually enjoy playing board games in the future
