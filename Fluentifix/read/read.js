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

/*Random Text*/
/*----------------------------------------------------------------------------------------------------------------*/
// Function to fetch and display a random text fragment from a file
function loadRandomText(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Extract text fragments enclosed in backticks (` `)
            let matches = [...data.matchAll(/`([^`]+)`/g)].map(match => match[1]);
            if (matches.length > 0) {
                let randomFragment = matches[Math.floor(Math.random() * matches.length)]; // Pick a random fragment
                document.getElementById("randomText").textContent = randomFragment; // Display text
                document.getElementById("def1").classList.remove("hidden"); // Show the section
            } else {
                console.error("No valid text fragments found in the file.");
            }
        })
        .catch(error => console.error("Error loading file:", error));
}
// Event listeners for each button
document.getElementById("loadFile1").addEventListener("click", function () {
    loadRandomText("../Fluentify/read/text/a0a1.txt");
});
document.getElementById("loadFile2").addEventListener("click", function () {
    loadRandomText("../Fluentify/read/text/a2.txt");
});
document.getElementById("button3").addEventListener("click", function () {
    loadRandomText("../Fluentify/read/text/b1.txt");
});
document.getElementById("button4").addEventListener("click", function () {
    loadRandomText("../Fluentify/read/text/b2.txt");
});
document.getElementById("button5").addEventListener("click", function () {
    loadRandomText("../Fluentify/read/text/c1.txt");
});
document.getElementById("button6").addEventListener("click", function () {
    loadRandomText("../Fluentify/read/text/c2.txt");
});
window.onload = () => loadRandomText("../Fluentify/read/text/a0a1.txt");
/*----------------------------------------------------------------------------------------------------------------*/


/*Audio Recording*/
/*----------------------------------------------------------------------------------------------------------------*/
let mediaRecorder;
let audioChunks = [];
const recordButton = document.getElementById("recordButton");
const stopButton = document.getElementById("stopButton");
const audioPlayback = document.getElementById("audioPlayback");

recordButton.addEventListener("click", async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    recordButton.disabled = true;
    stopButton.disabled = false;

    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayback.src = audioUrl;
        audioChunks = [];
    };
});

stopButton.addEventListener("click", () => {
    mediaRecorder.stop();
    recordButton.disabled = false;
    stopButton.disabled = true;
});
/*----------------------------------------------------------------------------------------------------------------*/

/*Box Writing*/
/*----------------------------------------------------------------------------------------------------------------*/
function saveEssay() {
    const text = document.querySelector("#essayText").value;
    if (text.trim() === "") {
        alert("Please write something before saving.");
        return;
    }
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "essay.txt";
    a.click();
}

function submitEssay() {
    const text = document.querySelector("#essayText").value;
    if (text.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }
    document.getElementById("confirmation").style.display = "block";
}
/*----------------------------------------------------------------------------------------------------------------*/







// document.getElementById("button3").addEventListener("click", function () {
//     fetch("../Fluentify/read/text/b1.txt") // Load the text file
//         .then(response => response.text())
//         .then(data => {
//             // Extract text fragments between backticks using regex
//             let matches = [...data.matchAll(/`([^`]+)`/g)].map(match => match[1]);

//             if (matches.length > 0) {
//                 let randomFragment = matches[Math.floor(Math.random() * matches.length)]; // Pick a random fragment
//                 document.getElementById("randomText").textContent = randomFragment; // Display the text
//                 document.getElementById("def1").classList.remove("hidden"); // Show the section
//             } else {
//                 console.error("No valid text fragments found in the file.");
//             }
//         })
//         .catch(error => console.error("Error loading file:", error));
// });