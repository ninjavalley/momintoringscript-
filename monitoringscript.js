var ethers = require('ethers');
const network = "goerli";

// Specify your own API keys
// Each is optional, and if you omit it the default
// API key for that service will be used.
const provider = ethers.getDefaultProvider(network, {
    //etherscan: "Z1K64SM6R68IHPI8PJFP2INIZI5Y3CNYB6",
    //infura: "3cb87bbdcd404226b1089e3b93bf40bc",
    // Or if using a project secret:
    // infura: {
    //   projectId: YOUR_INFURA_PROJECT_ID,
    //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
    // },
    alchemy: "G-oienDO_zmOHFWlZJ49UbiVO6pULdpu",
    //pocket: YOUR_POCKET_APPLICATION_KEY
    // Or if using an application secret key:
    // pocket: {
    //   applicationId: ,
    //   applicationSecretKey:
    // },
    //ankr: YOUR_ANKR_API_KEY
});

provider.getNetwork().then(console.log)

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"projectName","type":"string"},{"indexed":false,"internalType":"string","name":"failureText","type":"string"}],"name":"FailureAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"projectName","type":"string"},{"indexed":false,"internalType":"string","name":"failureText","type":"string"}],"name":"FailureTestNet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"projectName","type":"string"},{"indexed":false,"internalType":"string","name":"failureText","type":"string"}],"name":"GoodhealthAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"projectName","type":"string"},{"indexed":false,"internalType":"string","name":"failureText","type":"string"}],"name":"GoodhealthTestNet","type":"event"},{"inputs":[{"internalType":"string","name":"_projectName","type":"string"},{"internalType":"string","name":"_failureText","type":"string"}],"name":"failureAdminWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_projectName","type":"string"},{"internalType":"string","name":"_failureText","type":"string"}],"name":"failureTestnet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_projectName","type":"string"},{"internalType":"string","name":"_healthdetails","type":"string"}],"name":"goodhealthAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_projectName","type":"string"},{"internalType":"string","name":"_healthdetails","type":"string"}],"name":"goodhealthTestnet","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var contract = new ethers.Contract("0x053aE5bCC7C97F21C3929e165A716FD6909D7754", JSON.parse(JSON.stringify(abi)), provider);

//testemailchetan@gmail.com
/*
contract.on("GoodhealthTestNet", (from,to,value,event)=>{
    console.log(JSON.stringify({
        from: from,
        to: to,
        value: value.toString(),
        data: event
    }))
});
*/


contract.on("GoodhealthTestNet",(a,b,c)=>{
    console.log("#####>>>>",b)
})
//console.log(provider.getLogs({}));


