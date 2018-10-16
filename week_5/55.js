console.log("55");

const   downloadButton = document.getElementById("downloadButton"),
        poka = document.getElementById("poka"),
        innosc = document.getElementById("innosc");

const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];

downloadButton.addEventListener("click", function(){


    getPicture(urls).then( pics => {

        console.log("pics = " + pics);
        let docFrag = document.createDocumentFragment();

   /*      pics.forEach( function(elem, i) {
            docFrag.append(elem);

            console.log(elem);
            console.log(" i w pisc : " + i);

            if(i == (pics.length-1)){
                console.log("wysylyamy docFrag: " + docFrag);
                return pics;
            }
        }) */
        pics = "dupa";
        return pics;

    }).then( obj => {
        console.log("ostatni :" + obj);
        poka.append(obj) }
        );

})        
/*     Promise.all([
        getPicture(urls[0]),
        getPicture(urls[1]),
        getPicture(urls[2]),
        getPicture(urls[3]),
    ]).then( function(data){

        data.forEach(element => {
            poka.append(element);
        });
    }) */

    // getPicture(urls[0]).then(
    //     picture => poka.append(picture)
    // );

function getPicture(urlsTab){
    
    let tabImages = new Array(urlsTab.length),
        counter = 0;

    console.log(tabImages);

    let p = new Promise(function(resolve){

        urlsTab.forEach( function(elem, i) {
            
            tabImages[i] = new Image(300, 210);
                tabImages[i].src = elem;

            tabImages[i].addEventListener("load", function(){
                counter++
                console.log(counter);
                if(counter == 4){
                    console.log("wysylamy");
                    console.log(tabImages);
                    resolve(tabImages);
                }
            })    

        });

    });
    
    return p;
}


  /*   let picture = new Image(300, 210);
    
        picture.src = url;
    
        let p = new Promise(function(resolve, reject){
            
            picture.addEventListener("load", function(){
        
                resolve(picture);
                console.log("finished loading");
            })
            
        })

        return p; */

// function getPicture(url){
    
    
//     let picture = new Image(300, 210);
    
//         picture.src = url;
    
//         let p = new Promise(function(resolve, reject){
            
//             picture.addEventListener("load", function(){
        
//                 resolve(picture);
//                 console.log("finished loading");
//             })
            
//         })

//         return p;
// }