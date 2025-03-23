const products= [
    {
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    stock: 5
},
{
    name: "Phone",
    price: 30000,
    category: "Electronics",
    stock: 5
},
{
    name: "Headphones",
    price: 20000,
    category: "Electronics",
    stock: 5
}
]



function availProducts() {
    console.log("Available Products:");
    for (let product of products) {
        console.log(`${product.name} - $${product.price} (Stock: ${product.stock})`);
    }
}

//Checks if the product exists and if there's enough stock.

function findProduct(name) {
    for (let product of products) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            return product; 
        }
    }
    return null;
}

// Call the function to display products
availProducts();

let searchProduct = "Laptop";
let foundProduct = findProduct(searchProduct);
if (foundProduct) {
    console.log(`✅ Found: ${foundProduct.name} - $${foundProduct.price} (Stock: ${foundProduct.stock})`);
} else {
    console.log(`❌ Product '${searchProduct}' not found.`);
}

// 📌 Requirements:
// Create an array called cart to store selected products.
// Create a function addToCart(productName)
// This function should:
// Find the product from the products array.
// Add it to the cart if it's in stock.
// Decrease the stock count after adding.
// Create a function viewCart()
// This function should:
// Display all products in the cart with their prices.
// Create a function calculateTotal()
// This function should:
// Sum up the total cost of all items in the cart.


const cart= [
    {
        name: 'Laptop',
        price: 30000,
        stock: 5
    },
    { name: 'Phone',
        price: 40000,
        stock: 5
    }
   

]

function addToCart(productName){
    for(cart in key=== 'name'){
        console.log(cart[key])
    }
               
          
}

function viewCart() {
        for (let item of cart) {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                return product; 
            }
        }
        return null
    }
  

//Create an empty array called tasks to store tasks.
// Write a function addTask(taskName) that:
// Adds a new task (as a string) to the tasks array.
// Displays a message confirming the task was added.
// Write a function viewTasks() that:
// Displays all tasks in the tasks array.
// If there are no tasks, display "No tasks available."
// Write a function removeTask(taskName) that:
// Removes the specified task from tasks.
// Displays a message confirming the task was removed.
// If the task is not found, display "Task not found."

let tasks= []

function addTask(taskName){
    tasks.push(taskName)
    return 'New task has been added!'
}

function viewTasks(){
    for (i=0; i< tasks.length;i++)
        if (tasks.length===0){
            return 'No tasks available'
        }
}

// Requirements:
// 1️⃣ Create an empty array called favoriteMovies.
// 2️⃣ Write a function addMovie(movieName) that:

// Adds a movie to the favoriteMovies list.
// Prints "Movie added!" when successful.
// 3️⃣ Write a function viewMovies() that:
// Lists all the movies in favoriteMovies.
// If the list is empty, print "No movies added yet!".
// 4️⃣ Write a function removeLastMovie() that:
// Removes the last movie in the list.
// Prints "Last movie removed!".
// If the list is empty, print "No movies to remove!".


let favoriteMovies=[]

function addMovie(movieName){
    favoriteMovies.push(movieName)
    return 'New movie added!'
}

function viewMovies() {
    if (favoriteMovies.length === 0) {
        return "No movies added yet!";
    }

    let movieList = "";
    for (let i = 0; i < favoriteMovies.length; i++) {
        movieList += (i + 1) + ". " + favoriteMovies[i] + "\n";
    }
    return movieList;
}

function removeLastMovie() {
    if (favoriteMovies.length === 0) {
        return "No movies to remove!";
    }

    let removedMovie = favoriteMovies.pop();
    return `"${removedMovie}" removed from the list.`;
}

// Create an empty array called favoriteSongs to store song names.
// Create a function addSong(songName)
// Adds a new song to favoriteSongs.
// Returns "New song added!"
// Create a function viewSongs()
// Uses a for loop to list all songs.
// If no songs are added, return "No songs added yet!"
// Create a function removeLastSong()
// Removes the last song from favoriteSongs.
// Returns "Last song removed!"
// If the list is empty, return "No song to remove!"


let favouriteSong= []

function addSong(songName){
    favouriteSong.push(songName)
    console.log ('New song added!')
}

function viewSongs(){
   
    if (favouriteSong.length===0){
        console.log('No songs added yet')
        return;
    }
    for (let i=0; i< favouriteSong.length; i++)
        console.log(favouriteSong[i]);

}
function removeLastSong(){
    if (favouriteSong.length===0){
        console.log('No song to remove!')
        return;
    }
       

    let removedSong = favouriteSong.pop()
    console.log(`${removedSong} from the list`)
}