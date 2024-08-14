const checkBoxes = document.querySelectorAll("#burgerCheck");
console.log(checkBoxes);

let orderNow = document.getElementById("orderNow");
let imageGenerator = document.getElementById("imgGenerator");
let arr =[];

orderNow.addEventListener("click",function(){
    
    checkBoxes.forEach((checkbox) => {
        if(checkbox.checked){
            arr.push(checkbox.value);
        }
      });
    //   console.log(arr);
    if(arr.length === 0){
        alert("Pick at least one item");
    }

      
})