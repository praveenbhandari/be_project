// const { default: Web3 } = require("web3");

// const http = require('http')
// var acc = "null";
// var cors = require('cors');
// // app.use(cors());
// console.log(window.ethereum)
// const server = http.createServer((req, res) => {

//     (async () => {
//         if (window.ethereum) {
//             window.ethereum.send('eth_requestAccounts');
//             window.web3 = new Web3(window.ethereum);

//             var accounts = web3.eth.getAccounts();
//             acc = accounts[0];
//             console.log(acc);
//         }
//         else {
//             console.log("else")
//             // res.write(acc)
//         }
//     })();
//     res.write(acc);
//     res.end();
// });
// server.listen(8080);
// var Web3 = require('web3');

// if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
//     window.Web3 = Web3;
// }

// web3 = new Web3(window.currentProvider);
// window.ethereum.enable().catch((error) => {
//     // User denied account access
//     console.log(error);
// });
// console.log(web3);
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
//     console.log(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// }
// const Web3 = Web3

// var Web3=require('web3')
// var Web3 = require('./lib/web3');

var web3 = new Web3(window.ethereum);
// var Contract = require('web3-eth-contract');
var acc = null;

var contract_addr = ""


const connectt = async () => {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        acc = accounts[0];
        console.log(acc);
    }
    else {
        console.log("else")
        // res.write(acc)
    }
};
connectt();
console.log("ughhhh")
var abi = JSON.parse('[{"inputs": [],"name": "getBalance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view",       "type": "function"},{"inputs": [{"internalType": "uint256","name": "amountt","type": "uint256"}],"name": "sendmoney","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "payable","type": "function"}]')
var bytecode = "0x608060405264174876e80060025534801561001957600080fd5b50610163806100296000396000f3fe6080604052600436106100295760003560e01c806312065fe01461002e578063acdda4f514610059575b600080fd5b34801561003a57600080fd5b50610043610089565b60405161005091906100b4565b60405180910390f35b610073600480360381019061006e9190610100565b610091565b60405161008091906100b4565b60405180910390f35b600042905090565b6000819050919050565b6000819050919050565b6100ae8161009b565b82525050565b60006020820190506100c960008301846100a5565b92915050565b600080fd5b6100dd8161009b565b81146100e857600080fd5b50565b6000813590506100fa816100d4565b92915050565b600060208284031215610116576101156100cf565b5b6000610124848285016100eb565b9150509291505056fea26469706673582212201d0283a099716e0cf529dad5146be7d9acd305f1884c67684b651f140bfa7ba064736f6c63430008110033"



const deploy = async (abi, bytecode) => {
    console.log("starting deployyyyy");
    var deploycontract = new web3.eth.Contract(abi).deploy({
        data: bytecode,
        arguments: []
    });
    var estimatedGas = await deploycontract.estimateGas();

    var deployedcontract = await deploycontract.send({
        from: acc,
        gas: estimatedGas
    })
    console.log("end")
    console.log("contract addr : " + deployedcontract.options.address);
    contract_addr = deployedcontract.options.address;
    console.log("contract addr : " + contract_addr);
    return deployedcontract.options.address;
}
(async () => {
    // await deploy(abi, bytecode);
    // call_contract(contract_addr);
    // console.log("deployeddd")
})();

call_contract("0x6F61bd9CEb8A8291b20dC90f11cE7D37d77fDE92");

function call_contract(contract_addrr) {
    var AgentContract = new web3.eth.Contract(abi, contract_addr);
    // contractInstance = AgentContract.at(contract_addrr);
    // web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    // console.log("Web3 Connected:" + window.web3.eth.defaultAccount);

    // contract_addr = contractInstance
    // console.log(contract_addr);
    console.log(web3.currentProvider)
    console.log("aaa : " + AgentContract.methods.getBalance());
    AgentContract.getBalance(function (error, results) {

    });

    return web3.currentProvider.selectedAddress;
}
