/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    "use strict";


  var numCheck=function(nums){
    var mark =true;
    nums.forEach(function(value){
        if (typeof(value)!== 'number'){
            mark=false;}
        });
     return mark;
  };

  var sum=function(nums){
    if(numCheck(nums)==false){
        console.log('not number array');
        return('not number array error');
    }
    return nums.reduce(function(sumSoFar,value){
    return sumSoFar+value;
   },0);
  };

  $(".sb ").on("click", function(){
    var string=document.getElementById("input1").value;
    var nums = string.split(" ").map(Number);   
    var $new_message= document.createElement('p');
    $new_message.setAttribute('class', 'result');
    $new_message.innerHTML= sum(nums);
    $(".result").append($new_message);

   });

//sum([1,2, '5',4]);

};

$(document).ready(main);