const checkBoxes = document.querySelectorAll("#burgerCheck");
// console.log(checkBoxes);

let orderNow = document.getElementById("orderNow");
let imageGenerator = document.getElementById("imgGenerator");
let imgTag = document.getElementById("imgTag");
let arr =[];

orderNow.addEventListener("click",function(){
    
    checkBoxes.forEach((checkbox) => {
        if(checkbox.checked){
            arr.push(checkbox.value);
        }
        // console.log(arr);
        
      });
    //   console.log(arr);
    if(arr.length === 0){
        alert("Pick at least one item");
        return;
    }
    const randomFood = arr[Math.floor(Math.random() * arr.length)];
    let foodImage = document.createElement("img");
    // console.log(randomFood);
    if (randomFood === 'Burger') {

      } else if (randomFood === 'Fries') {
        foodImage.src = 'https://source.unsplash.com/random/600x400?healthy-fries';
      } else if (randomFood === 'Drink') {
        foodImage.src = 'https://source.unsplash.com/random/600x400?drink';
      } 
    
    
    
})