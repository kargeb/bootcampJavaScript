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


    getPicture(urls[0]).then(
        picture => poka.append(picture)
    );
    
    
})        

function getPicture(url){
    
    
    let picture = document.createElement("img");
    
        picture.src = url;
    
        
        let p = new Promise(function(resolve, reject){
            
            picture.addEventListener("load", function(){
        
                resolve(picture);
                console.log("finished loading");
            })
            
    
    
        })
        // poka.append(picture);
        return p;
}