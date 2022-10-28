//Página Web do Lé Atômico
{
let num_likes = 0;
al = false
    function pagelike(){
        if (al == false){
            num_likes = parseInt(num_likes);
            num_likes++
            document.getElementById("l").innerHTML="Likes: " + num_likes;
            al = true
        }
    }
}