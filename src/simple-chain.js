const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */



const chainMaker = {

  result: [],

  separator: "~",

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position)) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    } 
    else if ((position <= 0)||(position > this.result.length)) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    else if (!Number.isInteger(position)) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    } 
    else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let final = this.result.join('~~');
    this.result = [];
    return final;
  }
};

module.exports = {
  chainMaker
};
