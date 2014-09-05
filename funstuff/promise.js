///jQuery style promises. 
var wait = jQuery.Deferred();
var p = wait.promise();


p.done(function(value){
	console.log(value);
});

setTimeout(function(){
	wait.resolve(Math.random());
}, 1000);


function waitForN(n) {
	var d = $.Deferred();
	setTimeout(d.resolve, n);
	return d.promise();
}

waitForN(1000)
.then(function() {
	console.log("Hello World");
	return waitForN(2000);
})
.then(function(){
	console.log("Finally")
})


function getData(d){
	return new Promise(function(resolve, reject){
		setTimeout(function(){ resolve(d); }, 1000);
	});
}
var x;

getData(10)
.then(function(num1){
	x = 1 + num1;
	return getData(30);
})
.then(function(num2){
	var y = 1 + num2;
	return getData("Meaning of life: " + (x + y));
})
.then(function(answer){
	console.log(answer);
});