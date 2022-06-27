class BankAccount {
    constructor(agency, num, type) {
        this.agency = agency;
        this.num = num;
        this.type = type;
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    withdraw(value) {
        if(value > this._balance) {
            return 'Operation denied';
        }
        this._balance = this._balance - value;

        return this._balance;
    }

    deposit(value) {
        this._balance = this._balance + value;

        return this._balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(agency, num, creditCard) {
        super(agency, num);
        this.type = 'checking';
        this._creditCard = creditCard;
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(value) {
        this._creditCard = value;
    }
}

class SavingsAccount extends BankAccount {
    constructor(agency, num) {
        super(agency, num);
        this.type = 'savings';
    }
}

class UniversityAccount extends BankAccount {
    constructor(agency, num) {
        super(agency, num);
        this.type = 'university';
    }

    withdraw(value) {
        if(value > 500) {
            return 'Operation denied!';
        } else if(value > this._balance) {
            return 'Operation denied!';
        }
        this._balance = this._balance - value;
        return this._balance;
    }
}