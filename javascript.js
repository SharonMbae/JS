// Here's a simple HTML, CSS, and JavaScript project where you can:
// ✅ Add songs to a list
// ✅ View the list
// ✅ Remove the last song


const songInput = document.getElementById("songInput");
const addSongBtn = document.getElementById("addsong");
const removeSongBtn = document.getElementById("removelastsong");
const songList = document.createElement("ul"); 
document.body.appendChild(songList); 


let favoriteSongs = [];


function addSong() {
    const songName = songInput.value.trim(); // Get input and remove spaces

    if (songName === "") {
        alert("Please enter a song name!");
        return;
    }

    favoriteSongs.push(songName); 

    updateSongList(); 
    songInput.value = ""; 
}


function removeLastSong() {
    if (favoriteSongs.length === 0) {
        alert("No song to remove!");
        return;
    }

    favoriteSongs.pop(); 
    updateSongList(); 

// Function to update the song list display
function updateSongList() {
    songList.innerHTML = ""; // Clear list before updating

    for (let i = 0; i < favoriteSongs.length; i++) {
        let li = document.createElement("li");
        li.textContent = favoriteSongs[i];
        songList.appendChild(li);
    }
}
}


addSongBtn.addEventListener("click", addSong);
removeSongBtn.addEventListener("click", removeLastSong);