const BlockChain = require('./blockchain');

const bitcoin = new BlockChain();

bitcoin.createNewBlock(34342,'egdfvwedgvs','efvwgdvsv');
bitcoin.createNewTransaction(232 , 'Alexvsdfdf', 'gendgfwsdfsa');

bitcoin.createNewBlock(423423,'edgsgdsfs','dgsqaefd');

bitcoin.createNewTransaction(2342 , 'Alexvsdfdf', 'gendgfwsdfsa');
bitcoin.createNewTransaction(243 , 'Alexvsdfdf', 'gendgfwsdfsa');
bitcoin.createNewTransaction(1334 , 'Alexvsdfdf', 'gendgfwsdfsa');
console.log(bitcoin);