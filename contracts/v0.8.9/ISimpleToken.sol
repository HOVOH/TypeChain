pragma solidity ^0.8.7;

interface ISimpleToken {
    function transfer(address from, uint256 value) external;
    function balanceOf(address _address) view external returns (uint);
    function totalSupply() view external returns (uint);

    function symbol() view external returns (string memory);

}
