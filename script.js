let ele01 = document.getElementById("b01");
let ele02 = document.getElementById("b02");
let ele03 = document.getElementById("b03");
let ele04 = document.getElementById("b04");
let ele05 = document.getElementById("b05");
let ele06 = document.getElementById("b06");
let ele07 = document.getElementById("b07");
let ele08 = document.getElementById("b08");
let ele09 = document.getElementById("b09");

let elementArray = [ele01,ele02,ele03,ele04,ele05,ele06,ele07,ele08,ele09];

let varArr = [true,true,true,true,true,true,true,true,true];

ele01.addEventListener("click",()=>eventFunction(ele01,0));
ele02.addEventListener("click",()=>eventFunction(ele02,1));
ele03.addEventListener("click",()=>eventFunction(ele03,2));
ele04.addEventListener("click",()=>eventFunction(ele04,3));
ele05.addEventListener("click",()=>eventFunction(ele05,4));
ele06.addEventListener("click",()=>eventFunction(ele06,5));
ele07.addEventListener("click",()=>eventFunction(ele07,6));
ele08.addEventListener("click",()=>eventFunction(ele08,7));
ele09.addEventListener("click",()=>eventFunction(ele09,8));


let cpuRandomResponse = [0,1,2,3,4,5,6,7,8];
let count = 1;
let markArrUser = [];
let markArrCpu = [];

function eventFunction(ele,i){
    if(varArr[i] && count<=9){
        ele.innerText = "X";
        varArr[i]=false;
        markArrUser.push(i);
        cpuAction(i);
        count++;
        if(switchFun(markArrUser)){
            setTimeout(() => {
                alert("You win this Round..!");
            }, 100);
        }
    }
}

function cpuAction(x){
    let y = Math.floor(Math.random()*8);
    while(!(varArr[y]) && count<9 ){
        y = Math.floor(Math.random()*8);
    }
    console.log(y);
    elementArray[y].innerText = "O";
    markArrCpu.push(y);
    if(switchFun(markArrCpu)){
        setTimeout(()=>{
            alert("Oops! CPU win this Round :-(");
        },100)
    }
    varArr[y] = false;
    console.log(varArr[y]);
    console.log(varArr);
    count++;
    console.log(count);
}

function switchFun(markArr){
    let resArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[3,6,9]];
    labelX:for(let i=0;i<resArr.length;i++){
            let flag = 0;
            for(let j =0;j<resArr[i].length;j++){
                if(markArr.includes(resArr[i][j])){
                    flag++;
                };
            };
            if(flag >= 3){            
                return true;
            }
    };
};