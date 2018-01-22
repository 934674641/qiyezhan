window.onload = function () {
    //banner轮播
    let bei = document.querySelector(".banner");
    let tu = document.querySelectorAll(".banner>.tu");
    let dian = document.querySelectorAll(".banc_son");
    let now = 0;
    let time = setInterval(t, 2000);

    function t() {
        if (now == tu.length) {
            now = 0
        }
        tu.forEach(function (ele, index) {
            ele.style.opacity = 0;
            dian[index].style.backgroundColor = "#fff";
        });
        tu[now].style.opacity = 1;
        dian[now].style.backgroundColor = "#E1472F";
        now++;
    }

    bei.onmouseover = function () {
        clearInterval(time);
    }
    bei.onmouseout = function () {
        time = setInterval(t, 2000);
    }
    dian.forEach(function (ele, index) {
        ele.addEventListener('click', function () {
            tu.forEach(function (ele1, index1) {
                ele1.style.opacity = 0;
                dian[index1].style.backgroundColor = "#fff";
            })
            tu[index].style.opacity = 1;
            this.style.backgroundColor = "#E1472F";
            now = index;
        })
    });
    //下部轮播
    // let st = setInterval(moveFn, 2000);
    // let innerObj = document.querySelector(".bigbox");
    // let box = document.querySelector(".smabox");
    // let next = document.querySelector(".btnr");
    // let prev = document.querySelector(".btnl");
    // console.log(innerObj)
    // let n = 0;
    // let dir = "right";
    //
    // function moveFn() {
    //     innerObj.style.transition = "all 1s";
    //     if (dir === "right") {
    //         n++;
    //     } else {
    //         n--;
    //     }
    //     // innerObj.style.marginLeft = -n * (1349 * 15.5 %) + "px";
    // }
    //
    // innerObj.addEventListener("transitionend", function () {
    //     flag = true;
    //     if (n ===) {
    //         n = 0;
    //         innerObj.style.transition = "none";
    //         innerObj.style.marginLeft = "-1349px";
    //     }
    //
    //     if (n == 0) {
    //         n = 7;
    //         innerObj.style.transition = "none";
    //         innerObj.style.marginLeft = "-1820px"
    //
    //     }
    // });
    //
    // window.onblur = box.onmousemove = function () {
    //     clearInterval(st);
    // }
    //
    // window.onfocus = box.onmouseout = function () {
    //     st = setInterval(moveFn, 2000);
    // }
    // // //获取焦点
    // // window.onfocus=function () {
    // //     st=setInterval(moveFn,2000);
    // // }
    // // //失去焦点
    // // window.onblur=function () {
    // //     clearInterval(st);
    // // }
    // let flag = true;
    // next.onclick = function () {
    //     if (flag) {
    //         dir = "right"
    //         //回复方向
    //         flag = false;
    //         moveFn();
    //     }
    // }
    // prev.onclick = function () {
    //     if (flag) {
    //         dir = "left";
    //         flag = false;
    //         moveFn();
    //     }
    // }
    //测导航
    {
        let logo = document.querySelectorAll(".logo");
        let wz = document.querySelectorAll(".wz");
        let lg1 = document.querySelector(".lg1");
        let lg2 = document.querySelector(".lg2");
        let lg3 = document.querySelector(".lg3");
        logo.forEach(function (ele, index) {
            ele.onmouseover = function () {
                wz[index].style.display = "block";
                wz[index].style.background = "#DF263F";

            }
            ele.onmouseout = function () {
                wz[index].style.display = "none";
            }
        })
    }
     // let consons=document.querySelectorAll(".conlb_content .zz .conlbc_son ")
     // let conright=document.querySelector(".content .con_right")
     // for(let l=0;l<consons.length;l++){
     //
     //     consons[l].onmouseover=function () {
     //         conright.style.display="block";
     //         consons[l].style.background="skyblue";
     //     }
         // consons[l].onmouseout=function () {
         //     conright.style.display="none";
         //     consons[l].style.background="";
         // }

    // }



let uls=document.querySelectorAll(".conlb_content .zz .conlbc_son ");
let lis=document.querySelectorAll(".content .con_right");

for(let i=0;i<uls.length;i++){
    uls[i].onmouseover=function(){
        for(let j=0;j<uls.length;j++){
            uls[j].style.background="";
            lis[j].style.display="none";
        }
        uls[i].style.background="skyblue";
        lis[i].style.display="block";
    }
}

}