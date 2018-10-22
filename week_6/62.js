console.log("62");

let lis = document.querySelectorAll("li");

console.log(lis);

let arr = [1,2,3,4];


if( typeof Array.from === "function" ){
    console.log("jest arrayFrom wiec robimy arrayMyFrom");


    Array.myFrom = function(arg, fn, fnThis){
        
        let arr = [];

        // if(fnThis){
        //     this = fnThis;
        // }

        for( let i=0; i<arg.length; i++ ){
            arr.push(arg[i]);
        }

        if(fn){
            // console.log("jest fukcja");

            arr = arr.map(fn,fnThis);


        } else {
            // console.log("nie ma funkcji");
        }

        return arr;


    };

};


var lisArr = Array.myFrom(lis);

console.log( Array.isArray( lisArr ) );

var lisTexts = Array.myFrom( lis, function(li){
    return li.textContent;
} )

console.log(lisTexts);

// let result = Array.myFrom(arr, function(elem, i){
//     return elem*i;
// });

// console.log( result );

// let tab = [1,2,3];

// console.log( typeof tab);


// console.log( typeof Array.myFrom(uls) );
// console.log( Array.myFrom(uls)  );

// console.log( Array.isArray(tab) );
// console.log( Array.isArray( Array.myFrom(uls) ) );