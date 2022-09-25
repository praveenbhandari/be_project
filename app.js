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
const web3 = new Web3(window.ethereum);
// var Contract = require('web3-eth-contract');
var acc = null;
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
var abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"send","outputs":[{"internalType":"uint256","name":"deposit","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]')
var bytecode = "0x608060405234801561001057600080fd5b50600080819055506103e86001819055506101e1806100306000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806312065fe01461004657806315c191a914610064578063b46300ec14610082575b600080fd5b61004e6100a0565b60405161005b91906100f9565b60405180910390f35b61006c6100aa565b60405161007991906100f9565b60405180910390f35b61008a6100b3565b60405161009791906100f9565b60405180910390f35b6000600154905090565b60008054905090565b6000806001546100c39190610143565b600181905550806001546100d79190610177565b60008190555090565b6000819050919050565b6100f3816100e0565b82525050565b600060208201905061010e60008301846100ea565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061014e826100e0565b9150610159836100e0565b925082820390508181111561017157610170610114565b5b92915050565b6000610182826100e0565b915061018d836100e0565b92508282019050808211156101a5576101a4610114565b5b9291505056fea26469706673582212204b28b19465677e650106a8af36011e964a145bad2cbefe64885046d452e4130164736f6c63430008110033"



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
    return deployedcontract.options.address;
}
(async () => {
    await deploy(abi, bytecode);
    console.log("deployeddd")
})();