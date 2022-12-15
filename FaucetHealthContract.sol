// 0x053aE5bCC7C97F21C3929e165A716FD6909D7754   contract on goerli 
// admin - 0xE0303B6b5917D46002df374E743502F730d8CB13
// pk - c5ad49b0acdfc94c1eb3a870966aae35c6f282c91738035e953165981e388323
// https://goerli.infura.io/v3/9c17e69ce54148f688ff37863e10fad4   infura provider
// ehtersjs
pragma solidity ^0.8.0;

contract FaucetHealthContract { 
    // if testnet is failed then below event will raised 
    event FailureTestNet(string projectName, string failureText);
    // if testnet is alive then 
    event GoodhealthTestNet(string projectName, string failureText);  

    function failureTestnet(string _projectName, string _failureText) public {
      emit FailureTestNet(_projectName, _failureText);
    }   
    function goodhealthTestnet(string _projectName, string _healthdetails) public {
      emit GoodhealthTestNet(_projectName, failureText);
    }


    // if Admin have less Gas/Balance then below event will raised
    event FailureAccount(string projectName, string failureText);
    // if Admin have good amount of Gas/Balance then below event will raised
    event GoodhealthAccount(string projectName, string failureText);

    function failureAdminWallet(string _projectName, string _failureText) public {
      emit FailureAccount(_projectName, _failureText);
    }   

    function goodhealthAccount(string _projectName, string _healthdetails) public {
      emit GoodhealthAccount(_projectName, failureText);
    }    
}