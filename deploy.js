const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'rally three arrest upper zone flat family water enact napkin stand only',
    'https://rinkeby.infura.io/v3/d928a9c204db4d418b536b7dbcf89977'
); //mneumonic can specify many accounts

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode })
        .send({ from: accounts[0], gas: '1000000', gasPrice: web3.utils.toWei('2', 'gwei') });

    console.log('Contract deployed to ', result.options.address);
};
deploy();