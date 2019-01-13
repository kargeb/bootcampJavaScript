console.log("55");

const   downloadButton = document.getElementById("downloadButton"),
        downloadButton2 = document.getElementById("downloadButton2"),
        poka = document.getElementById("poka");
        // innosc = document.getElementById("innosc");

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

        pics.forEach( function(elem, i) {
            docFrag.append(elem);

            console.log(elem);
            console.log(" i w pisc : " + i);

            // if(i == (pics.length-1)){
            //     console.log("wysylyamy docFrag: " + docFrag);
            //     return docFrag;
            // }
        })

        return docFrag;
        // pics = "dupa";
        // return pics;

    }).then( function(obj){

        poka.append(obj);
    });

})  

downloadButton2.addEventListener("click", function(){

    preloadImages(urls)
    .then(function(imgs) {
        console.log("Obrazy wczytane.");

        let docFrag = document.createDocumentFragment();

        imgs.forEach( function(elem, i) {
            docFrag.append(elem);

            console.log(elem);
            console.log(" i w pisc : " + i);
        })

        return docFrag;
        // tutaj utwórz dla każdego adresu URL
        // z przekazanej tablicy imgs element <img>
        // i wstaw je wszystkie do fragmentu dokumentu,
        // który na końcu zwrócisz, aby był dostępny
        // w kolejnym bloku .then

        //
    })
    .then(function(docFragment) {
        poka.append(docFragment);
        // wstaw otrzymany fragment dokumentu na stronę,
        // aby wczytane obrazy się pokazały
    })
    .catch(function(err) {
        // na wypadek błędu, wyświetl komunikat w konsoli
        console.log(err.message);
    });

});
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
                tabImages[i].className = "img-thumbnail m-1";

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


function preloadImages(urlsTab){
    
    let tabImages = new Array(urlsTab.length),
        counter = 0;

    let p = new Promise(function(resolve){

        urlsTab.forEach( function(elem, i) {
            
            tabImages[i] = new Image(300, 210);
                tabImages[i].src = elem;
                tabImages[i].className = "img-thumbnail m-1";

            tabImages[i].addEventListener("load", function(){
                counter++

                if(counter == 4){
                    resolve(tabImages);
                }
            })    
        });
    });
    return p;
}

