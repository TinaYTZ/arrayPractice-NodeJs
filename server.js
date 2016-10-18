/*jslint maxlen: 130 */
'use strict';
var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app;

app = express();
app.use(morgan('dev'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('./'));

http.createServer(app).listen(3000);
console.log("listen on 3000");

// create application/x-www-form-urlencoded parser 


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');

});


var sum = function(nums) {

    return nums.reduce(function(sumSoFar, value) {
        return sumSoFar + value;
    }, 0);
};

var avg = function(nums) {

    return sum(nums) / nums.length;
};


var max = function(nums) {

    var maxNum = 0;
    nums.forEach(function(value) {
        if (maxNum < value) {
            maxNum = value;
        }
    });
    return maxNum;
};

//max([1,2,3,4]);

//EX.3
var anyeven = function(nums) {
    var eMark = false;
    nums.forEach(function(value) {
        if (value % 2 === 0) {
            eMark = true;
        }
    });
    return eMark;
};
//anyEven([1,7,3,5]);

//EX.4
var alleven = function(nums) {
    var allEMark = true;
    nums.forEach(function(value) {
        if (value % 2 !== 0) {
            allEMark = false;
        }
    });
    return allEMark;
};
//allEven([2,5]);
var array2Contains = function(strings, word) {
    var eq2Mark = 0,
        tContains = false;
    strings.forEach(function(value) {
        if (value === word) {
            eq2Mark += 1;
        }
    });
    if (eq2Mark >= 2) {
        tContains = true;
    }
    return tContains;
};
var arrayNContains = function(strings, word, n) {
    var eqNMark = 0,
        nContains = false;
    strings.forEach(function(value) {
        if (value === word) {
            eqNMark += 1;
        }
    });
    if (eqNMark >= n) {
        nContains = true;
    }
    return nContains;
};
var convertStrToInt = function (arr) {
    var i=0;
    for (; i<arr.length; i++) {
        arr[i] = parseInt(arr[i],10);
    }
    return arr;
};

app.post('/sum', function(req, res) {
    console.log(req.body);
    var nums  = convertStrToInt(req.body.numbers);
    console.log('request', nums);
    var result = sum(nums);
    console.log(result);
    res.json({function:'sum: ',
               value:result});
});

app.post('/avg', function(req, res) {
    console.log(req.body);
    var nums  = convertStrToInt(req.body.numbers);
    var result = avg(nums);
    console.log(result);
    res.json({ function:'average: ', 
                value:result});
});


app.post('/max', function(req, res) {
    console.log(req.body);
    var nums  = convertStrToInt(req.body.numbers);
    var result = max(nums);
    console.log(result);
    res.json({ function:'Max number: ', 
                value:result});
});

app.post('/anyeven', function(req, res) {

    console.log(req.body);
    var nums  = convertStrToInt(req.body.numbers);
    var result = anyeven(nums);
    console.log(result);
    res.json({function:'if there is any even number: ',
             value:result});
});

app.post('/alleven', function(req, res) {
    console.log(req.body);
    var nums  = convertStrToInt(req.body.numbers);
        var result = alleven(nums);
    console.log(result);
    res.json({function:'if numbersare all even: ',
              value:result});
});




app.post('/twice', function(req, res) {
    console.log(req.body);
    var string = req.body.str;
    var str2 = req.body.str2;
    var array = string.split(' ');
    var result = array2Contains(array, str2);
    res.json({function:'if there is word show 2 or more: ',
              value:result});
});



app.post('/normore', function(req, res) {
    var string = req.body.str;
    var str2 = req.body.str2;
    var n = req.body.n;
    var array = string.split(' ');
    var result = arrayNContains(array, str2, n);
    console.log(result);
    var funcstr = 'if there is word show ' + n + ' times or more: ';
    res.json({function:funcstr,
              value:result});
});




app.get('/index.html', function(req, res) {
    res.send('<html><head></head><body>djfhdjskfjdhskfjdjsfjsdjfdsjj</body></html>');
});

app.get('/hello', function(req, res) {
    res.send('hello world');
});

app.get('/goodbye', function(req, res) {
    res.send('goodbye');
});