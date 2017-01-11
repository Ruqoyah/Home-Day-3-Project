'use strict'

module.exports = {

  toTwenty: function(){
  var result = [];
    for (var i = 1; i <= 20 ; i++) {
      result.push(i);
    }
    return result;
  },

  toForty:function(){
    var result = []
    for (var i = 2; i <= 40 ; i=i+2) {
          result.push(i);
    }
    return result;
  },

  toOneThousand:function(){
    var result = []
    for (var i = 10; i <= 1000 ; i=i+10) {
          result.push(i);
    }
    return result
  },


  search:function(target){
  this.bsIncrement = 0;
  var result = {}; 
  var targetIndex = this.binarySearch(target, 0, this.length - 1);

  result.length = this.length; 
  result.index = targetIndex;
  result.count = this.bsIncrement;
  return result;
  },

  binarySearch:function(target, low, high){
  if (low > high) { return -1; } 

    var mid = Math.floor((low + high) / 2);
    var value = this[mid];
    this.bsIncrement++;
    if (value > target) { return this.binarySearch(target, low, mid-1); }
    if (value < target) { return this.binarySearch(target, mid+1, high); }
    return mid; 
  },

}

