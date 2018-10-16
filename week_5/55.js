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


    Promise.all([
        getPicture(urls[0]),
        getPicture(urls[1]),
        getPicture(urls[2]),
        getPicture(urls[3]),
    ]).then( function(data){

        data.forEach(element => {
            poka.append(element);
        });
    })

    // getPicture(urls[0]).then(
    //     picture => poka.append(picture)
    // );
})        

function getPicture(url){
    
    
    let picture = new Image(300, 210);
    
        picture.src = url;
    
        let p = new Promise(function(resolve, reject){
            
            picture.addEventListener("load", function(){
        
                resolve(picture);
                console.log("finished loading");
            })
            
        })

        return p;
}