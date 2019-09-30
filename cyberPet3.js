
// This function hide the bubble spech till user press a button
$(function(){
    $(`.speech`).hide();
});

//Function to control the video 
var vid = document.getElementById("video"); 
var audio = document.getElementById("audio"); 



function playVid() { 
     vid.play(); 
     playBark();
     $(`.speech`).fadeIn(2000);
     audio.play(); 
     $(`.speech`).html(`Hi, I'm your dog`);
     $(`.speech`).fadeOut(500);
 } 

 function pauseVid() { 
     vid.pause(); 
     $(`.speech`).fadeOut(500);
 }
 
function playBark() { 
    audio.play(); 

}



//This function makes the dog to say something showing the bubble speech
$(function(){
   $(`#feedPet`).on(`click`, function(){
    $(`.speech`).fadeIn(3000);
    $(`.speech`).html(`Thank you!!! Let us play!`);
    $(`.speech`).fadeOut(500);
   });
});

/* I still need to know how can I make this work 

const vid = document.getElementById("video");

vid.addEventListener("click", () => {
    pauseVid()
})
*/