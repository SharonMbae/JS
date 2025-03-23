const movieInput= document.getElementById("movieInput")
const addmoviebtn= document.getElementById("addmovie")
const removelastmoviebtn= document.getElementById("removelastmovie")
const movielist = document.createElement('ul')
document.body.appendChild(movielist);

let favouriteMovie=[]


function addmovie(){
  const moviename =movieInput.value.trim();

  if(moviename===''){
    alert('Please enter movie name')
return;
  }
    


favouriteMovie.push(moviename)

updatemovielist();
movieInput.value= ""
}

function removelastmovie(){
    if (favouriteMovie.length===0){
        alert('No added favourite movie')
    return;
    }
        
favouriteMovie.pop();
updatemovielist();
}

function updatemovielist(){
    movielist.innerHTML= "";
     
   for  (let i=0; i<favouriteMovie.length; i++){
     let li= document.createElement('li')
     li.textContent= favouriteMovie[i];
     movielist.appendChild(li)
    }

}

addmoviebtn.addEventListener("click", addmovie);
removelastmoviebtn.addEventListener("click", removelastmovie);


