const container = document.querySelector('.container');
const allItems = document.querySelectorAll('.item');
const resetBtn = document.getElementById('reset');
const dialog = document.querySelector('dialog');
let dialogMsg = dialog.querySelector('h2');
const closeBtn = dialog.querySelector('button');

let arr = [true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false];
const img1 = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png";
const img2 = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp";
let count = arr.length;
let clickCount = 1;
let shipCount = 0;

allItems.forEach(item =>{
    const random = Math.floor(Math.random() * count);
    const img = document.createElement('img');
    img.classList.add('images');
    img.src = arr[random] ? img1 : img2;
    item.appendChild(img);
    arr.splice(random, 1);
    --count;

    item.addEventListener("click",()=>{
        img.style.display = "block";
        if(clickCount <= 8 && shipCount == 5){
            dialogMsg.innerText = "You Won!";
            dialog.show();
        }else if(clickCount >= 8 && shipCount < 5){
            dialogMsg.innerText = "You Lost!";
            dialog.show();
        }

        if(img.src == img1){
            ++clickCount;
            ++shipCount;
        }else{
            ++clickCount;
        }
    });
});

resetBtn.addEventListener("click",()=>{
    arr = [true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false];
    count = arr.length;
    allItems.forEach(item =>{
        const random = Math.floor(Math.random() * count);
        const img = item.querySelector('.images');
        img.src = arr[random] ? img1 : img2;
        img.style.display = "none";
        arr.splice(random, 1);
        --count;
    });
    clickCount = 1;
    shipCount = 0;
});

closeBtn.addEventListener("click",()=>{
    arr = [true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false];
    count = arr.length;
    allItems.forEach(item =>{
        const random = Math.floor(Math.random() * count);
        const img = item.querySelector('.images');
        img.src = arr[random] ? img1 : img2;
        img.style.display = "none";
        arr.splice(random, 1);
        --count;
    });
    clickCount = 1;
    shipCount = 0;
    dialog.close();
});