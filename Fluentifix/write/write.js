/*Navigation Bar*/
/*----------------------------------------------------------------------------------------------------------------*/
let header = document.querySelector('.navigation-bar');
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  header.classList.toggle('bar-colored');
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
  const links = document.querySelectorAll('.navigation-bar a');
  const icons = document.querySelectorAll('#menu-icon');
  links.forEach(link => {
    link.style.color = header.classList.contains('bar-colored') ? 'white' : '#525252'; // Change colors as needed
  });
  icons.forEach(icon => {
    icon.style.color = header.classList.contains('bar-colored') ? 'white' : '#525252'; // Change colors as needed
  });
};
/*----------------------------------------------------------------------------------------------------------------*/

/*Upload*/
/*----------------------------------------------------------------------------------------------------------------*/
window.addEventListener("load", ()=>{
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change", (e)=>{
        let fileName = e.target.files[0].name;
        let filetype = e.target.value.split(".").pop();
        fileshow(fileName, filetype);
    })

    const fileshow = (fileName, filetype) =>{
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox")
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML = fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        filewrapper.append(showfileboxElem);
    
        crossElem.addEventListener("click", ()=>{
            filewrapper.removeChild(showfileboxElem);
        })
    }
})
/*----------------------------------------------------------------------------------------------------------------*/

/*Send Essay*/
/*----------------------------------------------------------------------------------------------------------------*/
function sendEssay1() {
    const text = document.querySelector("#essayText1").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation1").style.display = "block";
}
function sendEssay2() {
    const text = document.querySelector("#essayText2").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation2").style.display = "block";
}
function sendEssay3() {
    const text = document.querySelector("#essayText3").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation3").style.display = "block";
}
function sendEssay4() {
    const text = document.querySelector("#essayText4").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation4").style.display = "block";
}
function sendEssay5() {
    const text = document.querySelector("#essayText5").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation5").style.display = "block";
}
function sendEssay6() {
    const text = document.querySelector("#essayText6").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation6").style.display = "block";
}
function sendEssay7() {
    const text = document.querySelector("#essayText7").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation7").style.display = "block";
}
function sendEssay8() {
    const text = document.querySelector("#essayText8").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation8").style.display = "block";
}
function sendEssay9() {
    const text = document.querySelector("#essayText9").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation9").style.display = "block";
}
function sendEssay10() {
    const text = document.querySelector("#essayText10").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation10").style.display = "block";
}
function sendEssay11() {
    const text = document.querySelector("#essayText11").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation11").style.display = "block";
}
function sendEssay12() {
    const text = document.querySelector("#essayText12").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation12").style.display = "block";
}
function sendEssay13() {
    const text = document.querySelector("#essayText13").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation13").style.display = "block";
}
function sendEssay14() {
    const text = document.querySelector("#essayText14").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation14").style.display = "block";
}
function sendEssay15() {
    const text = document.querySelector("#essayText15").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation15").style.display = "block";
}
function sendEssay16() {
    const text = document.querySelector("#essayText16").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation16").style.display = "block";
}
function sendEssay17() {
    const text = document.querySelector("#essayText17").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation17").style.display = "block";
}
function sendEssay18() {
    const text = document.querySelector("#essayText18").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation18").style.display = "block";
}
/*----------------------------------------------------------------------------------------------------------------*/