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
        (async () => {
            // 0x6F61bd9CEb8A8291b20dC90f11cE7D37d77fDE92
            // 0x18fc00dDD817620c0Cb02516Fd73E8658B659e13
            call_contract("0x18fc00dDD817620c0Cb02516Fd73E8658B659e13");
        })();

    }
    else {
        console.log("else")
        // res.write(acc)
    }
};
connectt();
console.log("ughhhh")

var abi = JSON.parse('[{"inputs": [{"internalType": "uint256","name": "amountt","type": "uint256"}],"name": "sendmoney","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "getBalance","outputs":[{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"}]');
var bytecode = "0x608060405264174876e800600255600060035534801561001e57600080fd5b506102248061002e6000396000f3fe6080604052600436106100295760003560e01c806312065fe01461002e578063acdda4f51461005a575b600080fd5b34801561003a57600080fd5b5061004361008a565b6040516100519291906100db565b60405180910390f35b610074600480360381019061006f9190610135565b610099565b6040516100819190610162565b60405180910390f35b60008060035442915091509091565b60006002826100a891906101ac565b6003819055506002826100bb91906101ac565b9050919050565b6000819050919050565b6100d5816100c2565b82525050565b60006040820190506100f060008301856100cc565b6100fd60208301846100cc565b9392505050565b600080fd5b610112816100c2565b811461011d57600080fd5b50565b60008135905061012f81610109565b92915050565b60006020828403121561014b5761014a610104565b5b600061015984828501610120565b91505092915050565b600060208201905061017760008301846100cc565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101b7826100c2565b91506101c2836100c2565b92508282026101d0816100c2565b915082820484148315176101e7576101e661017d565b5b509291505056fea264697066735822122005f949f24a59d7691db551a8a7da3db0e5ffd30b7947e056e5692326a882ddcb64736f6c63430008110033"



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




function call_contract(contract_addrr) {
    var AgentContract = new web3.eth.Contract(abi, contract_addrr);
    // contractInstance = AgentContract.at(contract_addrr);
    // web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    // console.log("Web3 Connected:" + window.web3.eth.defaultAccount);

    // contract_addr = contractInstance
    // console.log(contract_addr);
    console.log("provider  : " + web3.currentProvider)
    console.log("aaabc : " + AgentContract.methods.getBalance());

    TODO://ask for payment metamask ka
    // AgentContract.methods.getBalance(function (error, results) {
    //     if (!error) {
    //         console.log(results);
    //     }

    // });
    console.log(AgentContract.methods.sendmoney(110).call({ from: '0xBea3DbCC78b63Be254d9877CA75092C5a26c0097' }, function (error, results) {
        console.log("ress hehe : " + results);
    }));

    return web3.currentProvider.selectedAddress;
}
