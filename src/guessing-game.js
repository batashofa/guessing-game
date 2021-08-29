class GuessingGame {
    constructor() {
        this.result = null;
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = Math.round((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result
    }
}

module.exports = GuessingGame;
