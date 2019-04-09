class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents - numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberIn) {
        if (typeof numberIn === number) {
            this._numberOfStudents = numberIn;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }        
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school levbel.`)
    }

    static pickSubstituteTeatcher(substituteTeachers) {
        let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }
}

class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents)
    }
}

class High extends School {
    constructor(name, level, numberOfStudents, sportsTeam) {
        super(name, level, numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam() {
        return this._sportsTeam;
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'Priamary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age 13.');
lorraineHansbury.quickFacts();

lorraineHansbury.pickSubstituteTeatcher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new High('Al E. Smith', 'High', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeam);
