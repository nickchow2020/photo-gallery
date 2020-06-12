$('#photo-gallery').lightGallery(); 

const $searchBar = $(".search-input");
const $imgs = $("img");

$searchBar.on("keyup",function(){
    let $filterValue = $searchBar.val().toLowerCase();
    for(i = 0 ;i < $imgs.length;i += 1){
        let titles = $imgs[i].getAttribute("title");
        if(titles.indexOf($filterValue) > -1){
            $imgs[i].parentNode.style.display = "";
        }else{
            $imgs[i].parentNode.style.display = "none";
        }
    }
})

// $searchBar.on("keyup",function(){
//     let $filterValue = $searchBar.val().toLowerCase();
//     for(i = 0 ;i < $imgs.length;i += 1){
//         let titles = $imgs[i].getAttribute("title");
//         if(titles.includes($filterValue)){
//             $imgs[i].parentNode.style.display = "";
//         }else{
//             $imgs[i].parentNode.style.display = "none";
//         }
//     }
// })

// $searchBar.on("keyup",function(){
//     let $filterValue = $searchBar.val().toLowerCase();
//     $imgs.show();
//     if($filterValue !== ""){
//         $imgs.not(`[title*="${$filterValue}"]`).hide();
//     }

// })



