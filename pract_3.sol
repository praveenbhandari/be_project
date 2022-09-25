// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.16;


contract bank{
    uint amt;
    uint val;
    // uint deposit;
    constructor() public {
        amt=0;
        val=1000;
    }
    function getBalance()public view returns(uint){
        return val;
    }
    function getAmt() public view returns(uint){
        return amt;
    }
    function send() public returns(uint deposit){
        val=val-deposit;
        amt=val+deposit;
    }
}