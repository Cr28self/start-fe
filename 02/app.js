
/*var 변수*/
var  title= 'abc';
console.log(title);



//num
var count = 5;
//str
var count = "5";


var isNan = true;


var log = function (){
    console.log('hi');
}
function logg (){

}



/*obj형*/
var img = {};
const i = 2;


img.width = 100;
img.height = 200;
img['width2'] = 300;
img[222] = 1000;
img['name'+i] = 'hi';



console.log(typeof count);
console.log(img);



/*배열..*/
var arr = ["1",2,3,true,function (){console.log('hi')}];
console.log(arr,arr.length);


/*null*/

var nff = null;
var iiii = true;
var jjj = '';
var kk = -1;




/*arr*/
var arr = new Array(1, 2, 3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


