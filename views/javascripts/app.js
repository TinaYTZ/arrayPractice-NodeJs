/* jslint maxlen: 500 */
/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    'use strict';

 

    // Send POST request via ajax
    function handlePOST(url, obj, json) {
        $.ajax({
            type: 'POST',
            url: url,
            timeout: 15000,
            data: json,
            success: function(data) {
                // Get result data
                console.log('Result' + data);
                $(obj).text(data.function+data.value);
            },
            error: function (result) {
                console.log('ajax error ' + result.status);
            }
        });
    }

      // Manually handle submission
    $('form #btn1').click(function(e) {
        e.preventDefault();
        var str = $('.numbers').val();    
        var nums =str.split(' ').map(Number);
        var json = {'numbers':nums};
        handlePOST('/avg', '#output', json);
       });
       
        $('form #btn2').click(function(e) {
        e.preventDefault();        
        var str = $('.numbers').val();    
        var nums =str.split(' ').map(Number); 
        var json = {'numbers':nums};
        handlePOST('/max', '#output', json);
        });

        $('form #btn3').click(function(e) {
        e.preventDefault();
        var str = $('.numbers').val();    
        var nums =str.split(' ').map(Number);       
        var json = {'numbers':nums};
        handlePOST('/sum', '#output', json);
        });
        $('form #btn4').click(function(e) {
        e.preventDefault();
        var str = $('.numbers').val();    
        var nums =str.split(' ').map(Number);      
        var json = {'numbers':nums};
        handlePOST('/anyeven', '#output', json);
 });
      

        $('form #btn5').click(function(e) {
        
        // Stop page from reloading
        e.preventDefault();
        var nums = $('.numbers').val();        
        var json = {'numbers':nums.split(' ').map(Number)};
        handlePOST('/alleven', '#output', json);
        }); 

       
        
        $('form #btn6').click(function(e) {
        
        // Stop page from reloading
        e.preventDefault();
        var json = {'str':$('#str').val(),
                     'str2':$('#str2').val()};

        console.log(json);
        handlePOST('/twice', '#output2', json);

        }); 

      
        $('form #btn7').click(function(e) {
        e.preventDefault();
        var json = {'str':$('#str').val(),
                     'str2':$('#str2').val(),
                      'n':$('#n').val()} ;
        console.log(json);
        handlePOST('/normore', '#output2', json);
        }); 

};

$(document).ready(main);