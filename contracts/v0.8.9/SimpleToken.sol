pragma solidity ^0.8.7;

import { ISimpleToken } from "./ISimpleToken.sol";

contract SimpleToken is ISimpleToken {
    function transfer(address from, uint256 value) public {

    }

    function balanceOf(address addr) public view returns (uint) {
      return 1;
    }

    function totalSupply() public view returns (uint) {
      return 1000;
    }

    function symbol() public view returns(string memory){
      return "ST";
    }
}
