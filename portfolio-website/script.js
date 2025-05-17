console.clear();

const monitorScreenSection = document.getElementById("monitor-screen-section");
// Terminal monitor variables
const input = document.getElementById("command-input");
const output = document.getElementById("output");

// social media section variables
const github = document.getElementById("github");
const leetcode = document.getElementById("leetcode");
const linkedin = document.getElementById("linkedin");
const futureproject = document.getElementById("futureproject");
const display = document.getElementById("display");

let projectCardInner = document.getElementById("project-card-inner");
let projectCardFront = document.getElementById("project-card-front");
let projectCardBack = document.getElementById("project-card-back");

//displaying project details
let projectHeading = document.getElementById("project-heading");
let projectDescription = document.getElementById("project-description");
let projectLink = document.getElementById("project-link");
const projectBackwardBtn = document.getElementById("project-backward-btn");
const projectForwardBtn = document.getElementById("project-forward-btn");
let projects = [
   {
      name: "Memory match",
      description:
         "Build a memory game consisting of several items having two copies of each hidden until tapped to see . You can see only two cards at a time and try to memorise the location of so and complete the game in as less moves as possible.",
      link: "https://memory-game-1001.netlify.app/",
   },
   {
      name: "Math Game",
      description:
         "A math aptitude game which comprises of basic mathematic operators , current score tracker , high score and a level indicator. The difficulty/level of the game increases every 5 correct answers.",
      link: "https://math-game-1001.netlify.app/",
   },
   {
      name: "Snake Game",
      description:
         "A classic snake game replica. Snake eats food and increases its length but watch out of the boundry and it's own body or the snake dies. The game checks the current score and keeps track of high score, also gradually increases the speed of the snake to increase difficulty.",
      link: "https://snake-game-1001.netlify.app/",
   },
   {
      name: "Pomodoro Timer",
      description:
         "A countdown timer with clean UI to increase focus and productivity. Maintains state when paused and resume or can be reset.",
      link: "https://pomodoro-timer-1001.netlify.app/",
   },
   {
      name: "Number-Guesser",
      description:
         "A basic card-Number guesser. One just have to guess a number underneath a card. Check if you get it right or not.",
      link: "https://number-guesser-326166.netlify.app",
   },
];

let commands = ["transform", "projects"];
let cPlusPlusProjects = [
   "Library Management CLI App",
   "Student Management CLI App",
   "Memory-visuliser for pointers",
   "Mini E-commerce system",
   "Todo CLI App",
   "GTK-process-manager",
   "Contact Book CLI",
   "Task-Manager",
];
let javaScriptProjects = [
   "Expense-tracker",
   "Portfolio website",
   "Qr-generator",
   "task-manager",
   "dyanmic single page websites",
   "math-game",
   "card-number-guesser",
   "memory-game",
];

//   Terminal section

monitorScreenSection.addEventListener("click", () => {
   input.focus();
});

const introMsg = document.createElement("div");
introMsg.textContent = "Try 'help'...";
output.appendChild(introMsg);

async function typeOutput(text, delay = 20) {
   return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
         if (i < text.length) {
            output.innerHTML += text.charAt(i);
            i++;
         } else {
            clearInterval += "<br>";
            resolve();
         }
      }, delay);
   });
}
async function printProjects(project_arr, delay = 20) {
   return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
         if (i < cPlusPlusProjects.length) {
            output.innerHTML += project_arr[i] + "<br>";
            i++;
         } else {
            clearInterval += "<br>";
            resolve();
         }
      }, delay);
   });
}

async function runCommand(command) {
   const validCommands = [
      "help",
      "about",
      "projects",
      "display projects",
      "contact",
      "clear",
   ];

   const cmdLine = `<div><span class="prompt">guest@site:~$</span> ${command}</div>`;
   output.innerHTML += cmdLine;

   if (command === "help") {
      await typeOutput(
         "Available commands: help , about , projects , display projects , contact , clear"
      );
   }
   if (command === "clear") {
      output.innerHTML = "";
      output.innerHTML = "Try 'help'....";
   }
   if (command === "display projects") {
      await printProjects(cPlusPlusProjects);
      await printProjects(javaScriptProjects);
   }
   if (command === "about") {
      const aboutSection = document.getElementById("about-section");
      await typeOutput("Navigating to About section ...");
      aboutSection.scrollIntoView({ behavior: "smooth" });
      /* window.location.hash = "about-section"; */
   }
   if (command === "contact") {
      const contactSection = document.getElementById("contact-section");
      await typeOutput("Navigating to Contact section ...");
      contactSection.scrollIntoView({ behavior: "smooth" });
   }
   if (command === "projects") {
      const projectSection = document.getElementById("project-section");
      await typeOutput("Navigating to Project Section...");
      projectSection.scrollIntoView({ behavior: "smooth" });
   }
}
input.addEventListener("keydown", function (e) {
   if (e.key == "Enter") {
      const cmd = input.value.trim().toLowerCase();
      runCommand(cmd);
      input.value = "";
   }
});
//                            flip project card section start
let deg = 180;
let btnincrease = 0;
let btndecrease = 0;
function displayProjectDetails(index) {
   projectHeading.innerHTML = "";
   projectHeading.innerHTML = `<h2>${projects[index].name}</h2>`;
   projectDescription.innerHTML = "";
   projectDescription.innerHTML = `<p>${projects[index].description}</p>`;
   projectLink.innerHTML = "";
   projectLink.innerHTML = `<a href="${projects[index].link}" target="_blank">Project link</a>`;
}
function clearPojectDetails() {
   projectHeading.innerHTML = "";
   projectDescription.innerHTML = "";
   projectLink.innerHTML = "";
}
projectBackwardBtn.addEventListener("click", () => {
   if (btndecrease == 0) {
   } else {
      btndecrease--;
      clearPojectDetails();
      projectCardInner.style.transform = `rotateY(-${deg * btndecrease}deg)`;
      //projectCardInner.classList.toggle("transformedbackward");
      // console.log("backward button");
      setTimeout(displayProjectDetails, 500, btndecrease);
      btnincrease = btndecrease;
      if (btndecrease == 0) {
         projectBackwardBtn.style.display = "none";
      }
      if (btndecrease < projects.length - 1) {
         projectForwardBtn.style.display = "block";
      }
   }
});
projectForwardBtn.addEventListener("click", () => {
   {
      btnincrease++;
      clearPojectDetails();
      projectCardInner.style.transform = `rotateY(-${deg * btnincrease}deg)`;
      //projectCardInner.classList.toggle("transformedforward");
      //console.log("forward button", btnincrease);
      setTimeout(displayProjectDetails, 500, btnincrease);
      btndecrease = btnincrease;
      if (btnincrease > 0) {
         projectBackwardBtn.style.display = "block";
      }
      if (btnincrease == projects.length - 1) {
         projectForwardBtn.style.display = "none";
      }
   }
});
displayProjectDetails(btnincrease);
//                         flip project card section end

function printHelp() {
   display.innerHTML = "";
   commands.forEach((ele) => {
      display.innerHTML += `${ele}<br/>`;
   });
}
console.log(projects[0].description);

function projectCardDisplayer() {
   projectName.innerHTML = "";
   projectName.innerHTML = projects[0].name;
   projectDescription.innerHTML = "";
   projectDescription.innerHTML = projects[0].description;
}

function transfromlayout() {
   console.log("inside transformlayout");
   github.classList.remove("icon");
   github.classList.add("icon-transformed");
   leetcode.classList.remove("icon");
   leetcode.classList.add("icon-transformed");
   linkedin.classList.remove("icon");
   linkedin.classList.add("icon-transformed");
   futureproject.classList.remove("icon");
   futureproject.classList.add("icon-transformed");
}
