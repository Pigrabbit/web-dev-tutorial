const team = {
    _players: [
        {
            firstName: 'Heungmin',
            lastName: 'Son',
            age: 28
        },
        {
            firstName: 'Harry',
            lastName: 'Kane',
            age: 24
        },
        {
            firstName: 'Dele',
            lastName: 'Ali',
            age: 23
        }
    ],
    _games: [
        {
            opponent: 'Man-U',
            teamPoints: 4,
            opponentPoints: 2
        },
        {
            opponent: 'Chelsea',
            teamPoints: 3,
            opponentPoints: 1
        },
        {
            opponent: 'Arsnal',
            teamPoints: 3,
            opponentPoints: 0
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age,
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints,
        }

        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Man City', 0, 3);
team.addGame('Liverpool', 1, 1);

console.log(team.games);