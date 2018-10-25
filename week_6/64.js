console.log("64");

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

function resolveAfter40econds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved po 40');
      }, 4000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result40 = await resolveAfter40econds();
    console.log(result40);
    var result = await resolveAfter2Seconds();
    console.log(result);
    console.log("dupa");
    // expected output: 'resolved'
  }
  
//   asyncCall();

const   downloadButton = document.getElementById("downloadButton"),
        poka = document.getElementById("poka");

const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];

downloadButton.addEventListener("click", function(){


    show();
    
    /*     
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
    */
   
})

async function show(){

    console.log("async so my w ");
    let pictures = await preloadImages(urls);
    console.log(pictures);

    let docFrag = document.createDocumentFragment();
        
    pictures.forEach( function(elem, i) {
        docFrag.append(elem);
        
        console.log(elem);
        console.log(" i w pisc : " + i);
    })

    poka.append(docFrag);

}

function preloadImages(urlsTab){
    
    let tabImages = new Array(urlsTab.length),
    counter = 0;
    
    let p = new Promise(function(resolve){

        urlsTab.forEach( function(elem, i) {
            
            tabImages[i] = new Image(300, 210);
                tabImages[i].src = elem;

            tabImages[i].addEventListener("load", function(){
                counter++
                console.log(counter);

                if(counter == 4){
                    resolve(tabImages);
                }
            })    
        });
    });
    return p;
}
  