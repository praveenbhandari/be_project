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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#add_user').addEventListener('click', () => add_user());
});



var web3 = new Web3(window.ethereum);
// var Contract = require('web3-eth-contract');
var acc = null;
// var key

var contract_addr = "0xF8a8f6F6d095aBEf29dbBc8d09c2138909d5A6De"


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
            call_contract(contract_addr);
        })();

    }
    else {
        console.log("else")
        // res.write(acc)
    }
};

function add_user() {
    console.log("asdadad")
    console.log(AgentContract);
    AgentContract.methods.user("qqqqq", 0, 1233465).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);

    })
}
connectt();
console.log("ughhhh")

var abi = JSON.parse('[{"inputs": [{"internalType": "uint256","name": "amountt","type": "uint256"}],"name": "sendmoney","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "string","name": "name","type": "string"},{"internalType": "uint256","name": "pos","type": "uint256"},{"internalType": "uint256","name": "aadhar","type": "uint256"}],"name": "user","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "borower_list","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "addr","type": "address"}],"name": "get_borrower","outputs": [{"internalType": "string","name": "","type": "string"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "get_borrower_list","outputs": [{"internalType": "address[]","name": "","type": "address[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "addr","type": "address"}],"name": "get_lender","outputs": [{"internalType": "string","name": "","type": "string"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "get_lender_list","outputs": [{"internalType": "address[]","name": "","type": "address[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getBalance","outputs": [{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "lender_list","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"}]');
var bytecode = '0x608060405264174876e800600655600160075534801561001e57600080fd5b5061112b8061002e6000396000f3fe6080604052600436106100865760003560e01c8063acdda4f511610059578063acdda4f51461015d578063b1f07cfd1461018d578063cf3a5a1c146101ca578063d038487114610208578063d08e72791461024557610086565b806312065fe01461008b5780633f8ee26b146100b75780634e94b75d146100e25780635bc4efcf14610120575b600080fd5b34801561009757600080fd5b506100a0610270565b6040516100ae9291906108c2565b60405180910390f35b3480156100c357600080fd5b506100cc61027f565b6040516100d991906109db565b60405180910390f35b3480156100ee57600080fd5b5061010960048036038101906101049190610a3d565b61030d565b604051610117929190610afa565b60405180910390f35b34801561012c57600080fd5b5061014760048036038101906101429190610c8b565b61042b565b6040516101549190610cfa565b60405180910390f35b61017760048036038101906101729190610d1c565b61063c565b6040516101849190610d49565b60405180910390f35b34801561019957600080fd5b506101b460048036038101906101af9190610d1c565b610665565b6040516101c19190610d73565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec9190610a3d565b6106a4565b6040516101ff929190610afa565b60405180910390f35b34801561021457600080fd5b5061022f600480360381019061022a9190610d1c565b6107c2565b60405161023c9190610d73565b60405180910390f35b34801561025157600080fd5b5061025a610801565b60405161026791906109db565b60405180910390f35b60008060075442915091509091565b6060600280548060200260200160405190810160405280929190818152602001828054801561030357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116102b9575b5050505050905090565b60606000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548180546103a290610dbd565b80601f01602080910402602001604051908101604052809291908181526020018280546103ce90610dbd565b801561041b5780601f106103f05761010080835404028352916020019161041b565b820191906000526020600020905b8154815290600101906020018083116103fe57829003601f168201915b5050505050915091509150915091565b60606000339050600084036105255761044261088f565b8581600001819052508381602001818152505080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816104aa9190610f9a565b50602082015181600101559050506002829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508592505050610635565b600184036106305784600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001908161057c9190610f9a565b5082600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506003819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084915050610635565b600080fd5b9392505050565b600060028261064b919061109b565b60078190555060028261065e919061109b565b9050919050565b6002818154811061067557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015481805461073990610dbd565b80601f016020809104026020016040519081016040528092919081815260200182805461076590610dbd565b80156107b25780601f10610787576101008083540402835291602001916107b2565b820191906000526020600020905b81548152906001019060200180831161079557829003601f168201915b5050505050915091509150915091565b600381815481106107d257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600380548060200260200160405190810160405280929190818152602001828054801561088557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161083b575b5050505050905090565b604051806040016040528060608152602001600081525090565b6000819050919050565b6108bc816108a9565b82525050565b60006040820190506108d760008301856108b3565b6108e460208301846108b3565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061094282610917565b9050919050565b61095281610937565b82525050565b60006109648383610949565b60208301905092915050565b6000602082019050919050565b6000610988826108eb565b61099281856108f6565b935061099d83610907565b8060005b838110156109ce5781516109b58882610958565b97506109c083610970565b9250506001810190506109a1565b5085935050505092915050565b600060208201905081810360008301526109f5818461097d565b905092915050565b6000604051905090565b600080fd5b600080fd5b610a1a81610937565b8114610a2557600080fd5b50565b600081359050610a3781610a11565b92915050565b600060208284031215610a5357610a52610a07565b5b6000610a6184828501610a28565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aa4578082015181840152602081019050610a89565b60008484015250505050565b6000601f19601f8301169050919050565b6000610acc82610a6a565b610ad68185610a75565b9350610ae6818560208601610a86565b610aef81610ab0565b840191505092915050565b60006040820190508181036000830152610b148185610ac1565b9050610b2360208301846108b3565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b6c82610ab0565b810181811067ffffffffffffffff82111715610b8b57610b8a610b34565b5b80604052505050565b6000610b9e6109fd565b9050610'



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


var AgentContract;

function call_contract(contract_addrr) {
    AgentContract = new web3.eth.Contract(abi, contract_addrr);
    // contractInstance = AgentContract.at(contract_addrr);
    // web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    // console.log("Web3 Connected:" + window.web3.eth.defaultAccount);

    // contract_addr = contractInstance
    // console.log(contract_addr);
    console.log("provider  : " + web3.currentProvider)
    console.log("aaabc : " + AgentContract.methods.getBalance());

    TODO://ask for payment metamask ka

    // acc = web3.eth.selectedAddress;
    console.log("aaaaa " + acc);
    // acc = acc.toLocaleLowerCase();
    AgentContract.methods.getBalance().call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            console.log(results);
        }
    })
    console.log("hmm : " + AgentContract.methods.sendmoney(1121) + "  :: " + acc)
    // console.log(AgentContract.methods.sendmoney(110).call({ from: '0xBea3DbCC78b63Be254d9877CA75092C5a26c0097' }, function (error, results) {
    //     console.log("ress hehe : " + results);
    // }));
    AgentContract.methods.sendmoney(110).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);

    })
    return web3.currentProvider.selectedAddress;
}



// TODO:infura/quicknode