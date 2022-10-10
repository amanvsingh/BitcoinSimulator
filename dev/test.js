const BlockChain = require('./blockchain');

const bitcoin = new BlockChain();

bitcoin.createNewBlock(34342,'egdfvwedgvs','efvwgdvsv');
const t1 = bitcoin.createNewTransaction(232 , 'Alexvsdfdf', 'gendgfwsdfsa');
bitcoin.addTransactionToPendingTransactions(t1);
bitcoin.createNewBlock(423423,'edgsgdsfs','dgsqaefd');

const t2 = bitcoin.createNewTransaction(2342 , 'Alexvsdfdf', 'gendgfwsdfsa');
const t3 = bitcoin.createNewTransaction(243 , 'Alexvsdfdf', 'gendgfwsdfsa');
const t4 = bitcoin.createNewTransaction(1334 , 'Alexvsdfdf', 'gendgfwsdfsa');
bitcoin.addTransactionToPendingTransactions(t2);
bitcoin.addTransactionToPendingTransactions(t3);
bitcoin.addTransactionToPendingTransactions(t4);

console.log(bitcoin);
