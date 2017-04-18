import *  as _ from "lodash"

export class AccountOverview {
    balance = 36.4455
    allTransactions = [
        {Date : "2017-01-12", 
        Type: "Credit",
        Description : "thanks for the cheese",
        Amount : 2.44},
        {Date : "2017-02-03", 
        Description : "from mike, enjoy!",
        Type: "Credit",
        Amount : 5.112},
        {Date : "2017-02-06", 
        Description : "for that thing you did",
        Type: "Debit",
        Amount : -5.87},
        {Date : "2017-02-06", 
        Description : "Transaction",
        Type: "Gas",
        Amount : -0.00042}
    ];
    transactions = this.allTransactions;

    FilterType(typ : string){
        this.transactions = _.filter(this.allTransactions, t => {
            return t.Type === typ;
        })
    }
}