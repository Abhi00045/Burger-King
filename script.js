const checkBoxes = document.querySelectorAll("#burgerCheck");
// console.log(checkBoxes);

let orderNow = document.getElementById("orderNow");
let imageGenerator = document.getElementById("imgGenerator");
let imgTag = document.getElementById("imgTag");
let mainContent = document.getElementById("mainContent");
let orderId = document.getElementById("orderId");
let process = document.getElementById("process");
let imageGif = document.getElementById("images");
let arr =[];

orderNow.addEventListener("click",function(){
    
    checkBoxes.forEach((checkbox) => {
        if(checkbox.checked){
            arr.push(checkbox.value);
        }
        // console.log(arr);
        
      });
      console.log(arr);
    if(arr.length === 0){
        alert("Pick at least one item");
        return;
    }
    try{

      const orderIdValue = Math.floor(Math.random() * 1000) + 1000;
      const time = Math.floor(Math.random()*1000)+10;

      setTimeout(() => {
        orderId.innerText=`Order Id: ${orderIdValue}`;
        
      },Math.floor(Math.random() * 5000) + 2000);
      // console.log(orderIdValue);
      

      const randomFood = arr[Math.floor(Math.random() * arr.length)];
    // let foodImage = document.createElement("img");
    console.log(randomFood);
    setTimeout(() => {
      if(randomFood === "Burger"){
        document.getElementById("imgTag").src = "https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_mobile_my18jv"
      }
      else if(randomFood === "Coca-cola"){
       document.getElementById("imgTag").src = "https://th.bing.com/th/id/R.996bb71bb24208697a135393899ca0b3?rik=dRJdT%2b%2fO60BzBQ&riu=http%3a%2f%2fwww.omaggiomania.com%2fwp-content%2fuploads%2f2014%2f06%2fbuono-sconto-Coca-Cola-da-Burger-King_w.png&ehk=6wQ4D%2bI3BRalI1pLikBwZvJiE2H5wdYM5I4t4D0jeWU%3d&risl=&pid=ImgRaw&r=0"
      }
      else if(randomFood === "Fries"){
        document.getElementById("imgTag").src = "https://img.lovepik.com/photo/50159/3889.jpg_wh860.jpg"
      }
 
    }, 1000);
    }catch(error){
      console.log(`404 not found ${error}`);
    }finally{
      process.innerText="processing your order....";
      setTimeout(() => {
        process.innerText=`Order placed`;
        document.getElementById("imageRight").src="https://media0.giphy.com/media/EqS5Rp1mHhK9uCtJQR/giphy.gif?cid=6c09b952al30nuswhy527z27juicvcrxv6s31tqeojqprb7t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
      },2000);
      // alert(`Your ${orderIdValue} is delivering in ${time} mins`); 
    }
    
    
    
})