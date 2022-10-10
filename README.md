# BitcoinSimulator
Bitcoin Simulator -  BlockChain Implementation in Javascript Language along with implementation of OOPs Concepts.
A Decentralised network and Secure system to demonstrate the Working of blockchain.

## Block Explorer
An Interface to track the blocks, address, transcactions. [Link](https://fathomless-bayou-64600.herokuapp.com/block-explorer)
![image](https://user-images.githubusercontent.com/53997924/123775297-e1ac1f00-d8eb-11eb-979b-50ffe2ac6509.png)


## The Structure of the blockchain is :-
### Blockchain class
```js
class BlockChain {
	constructor() {
		this.chain = [];
		this.pendingTransactions = [];
		this.currentNodeUrl = currentNodeUrl;
		this.networkNodes = [ ... //List of all the nodes in the network...];

		this.createNewBlock(100, '0', '0'); //Genesis Block
	}
  	createNewBlock(nonce, previousBlockHash, hash) {
		const newBlock = {
			index: this.chain.length + 1,
			timestamp: Date.now(),
			transactions: this.pendingTransactions,
			nonce: nonce,
			hash: hash,
			previousBlockHash: previousBlockHash
		};

		this.pendingTransactions = [];
		this.chain.push(newBlock);

		return newBlock;
	}
  //Other Functions(Features)
 }
```

### Features and functions
The features that are added to the blockchain class:- 
* #### A proof of work algorithm to secure the network.
The proof-of-work is a mechanism for reaching global consensus on the valid blockchain: since all nodes have a copy of the blockchain, each node must agree on the conditions that prove how much effort a node has spent on verifying transactions.

To make the calculation difficult, every identification code must start with 0000 (four zeros). To do this we have to add a new field called NONCE.
```js
proofOfWork(previousBlockHash, currentBlockData) {
		let nonce = 0;
		let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		while (hash.substring(0, 4) !== '0000') {
			nonce++;
			hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		}
		return nonce;
	}
```
* Hashing algorithms to secure the data within the blockchain.
* The ability to mine (create) new blocks that contain data.
* The ability to create transactions and store them in blocks.
* An API/server that will be used to interact with the blockchain from the internet.
* It will be hosted on a decentralized blockchain network.
* A consensus algorithms to verify that the network nodes have valid data and are synchronized.
* A broadcasting system to keep the data in the blockchain network synchronized.

### Structure of blockchain
![Structure of block chain](https://user-images.githubusercontent.com/53997924/123775053-a27dce00-d8eb-11eb-9df7-63ba483fe63b.png)

### Structure of blocks inside the chain
![image](https://user-images.githubusercontent.com/53997924/123776588-0c4aa780-d8ed-11eb-9d40-d2d2cec9ffd0.png)
