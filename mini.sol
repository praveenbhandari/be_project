    // SPDX-License-Identifier: GPL-3.0

    pragma solidity >=0.8.16;


    import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
    contract bank{
        uint amt;
        uint val;
        // uint deposit;
        constructor() public {
            amt=0;
            val=1000;
        }
        // mapping(address => uint) borower_addr,lender_addr;

    uint256 PAISA=1*1e10;

        function sendmoney()public payable{
            // amt=amountt
            // amt=amountt;
            // return amountt;
            // 0xab594600376ec9fd91f8e885dadf0ce036862de0 matic/usd
            // require(getConversion(msg.value) >= PAISA); //1*10**18=100000000000000000 wei / 1 ether (set a min limit of 1 ethr)
    getConversion(msg.value)getConversion(msg.value)

        }

        function getprice()public view returns(uint256){
            AggregatorV3Interface interfacee = AggregatorV3Interface(0xAB594600376Ec9fD91F8e885dADF0CE036862dE0);
            (,int256 price,,,) = interfacee.latestRoundData();
            return uint256(price*1e10);

        }
        
        function getConversion(uint256 amount)public view returns(uint256){
            uint256 price=getprice();
            uint256 convert_price=(price*amount)/1e18;
            return convert_price;

            
        }




        // function withdraw(){}






        // function getBalance()public view returns(uint){
        //     return val;
        // }
        // // function getAmt() public view returns(uint){
        //     return amt;
        // }
        // function send() public returns(uint deposit){
        //     val=val-deposit;
        //     amt=val+deposit;
        // }
    }