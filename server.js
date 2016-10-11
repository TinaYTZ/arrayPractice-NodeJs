var express= require("express"),
    http = require("http"),
    bodyParser=require("body-parser"),
    path=require("path"),
    morgan = require("morgan"),
    app;

app = express();
app.use(morgan("dev"));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./"));

http.createServer(app).listen(3005);

// create application/x-www-form-urlencoded parser 


app.get('/',function(req,res){
	res.sendFile(__dirname+"/views/index.html");

});



app.post("/sum",function(req,res){
	
	console.log(req.body);
	var string=req.body.numbers;
    var nums = string.split(" ").map(Number);  
    var result=sum(nums); 
    console.log( result );
    res.end("sum:"+ result);
});

app.post("/avg",function(req,res){
	
	console.log(req.body);
	var string=req.body.numbers;
    var nums = string.split(" ").map(Number);  
    var result=avg(nums); 
    console.log( result );
    res.end("average:"+ result);
});


app.post("/max",function(req,res){	
	console.log(req.body);
	var string=req.body.numbers;
    var nums = string.split(" ").map(Number);  
    var result=max(nums); 
    console.log( result );
    res.end("Max number :"+ result);
});

app.post("/anyeven",function(req,res){
	
	console.log(req.body);
	var string=req.body.numbers;
    var nums = string.split(" ").map(Number);  
    var result=anyeven(nums); 
    console.log( result );
    res.end("if there is any even number:"+ result);
});

app.post("/alleven",function(req,res){
	console.log(req.body);
	var string=req.body.numbers;
    var nums = string.split(" ").map(Number);  
    var result=alleven(nums); 
    console.log( result );
    res.end("if numbersare all even:"+ result);
});

app.get('/index.html',function(req,res){
	res.send("<html><head></head><body>jhjhjnvbxms</body></html>");
});

app.get('/hello',function(req,res){
	res.send("hello world");
});

app.get('/goodbye',function(req,res){
	res.send("goodbye");
});


  var sum=function(nums){
    
    return nums.reduce(function(sumSoFar,value){
    return sumSoFar+value;
   },0);
  };

  var avg=function(nums){
   
  return sum(nums)/nums.length;
  };


  var max=function(nums){
  
    var maxNum=0;
    nums.forEach(function(value)
    {
        if(maxNum<value)
        {
            maxNum=value;    
         }
    });
    return maxNum;
  };

  //max([1,2,3,4]);

  //EX.3
  var anyeven= function(nums){
    var eMark=false;
    nums.forEach(function(value){
    if (value%2===0)
    { eMark=true;}
    });
    return eMark;
  };
  //anyEven([1,7,3,5]);

  //EX.4
  var alleven= function(nums){
    var allEMark=true;
    nums.forEach(function(value){
    if (value%2!==0)
    {    allEMark=false;}
    });
    return allEMark;
  };
  //allEven([2,5]);

