const questions = [
  "What is name of Eren's Father?",
  "What does Tatakae mean?",
  "Who is fidget spinner?",
  "What is Annie's type?",
  "Ending song of season 4 part 2?",
  "Whom did Mikasa love?",
];

const choices = [
  ["Zeke Yeager", "Grisha Yeager", "Mikasa Yeager", "Sudhanva Yeager"],
  ["Fight,Struggle", "Kill Titans", "Keep winning", "Erwin is gay"],
  ["Mikasa Ackerman", "Sudhanva Ackerman", "Kenny Ackerman", "Levi Ackerman"],
  ["Yellow haired", "Horse Faced", "Maid workers", "Tomboys"],
  ["Under the tree", "Name of Love", "Shinzu wo Sasageyo", "Akuma no ko"],
  ["Jean Brown", "Armin Halpert", "Eren Yeager", "Sudhanva Ackerman"],
];

const answers = [
  "Grisha Yeager",
  "Fight,Struggle",
  "Levi Ackerman",
  "Yellow haired",
  "Akuma no ko",
  "Eren Yeager",
];

let i = 0,
  j = 0;

let question_ = document.getElementById("question_");
let start = document.getElementById("start");
let options = document.getElementById("options");
let buttons = document.getElementById("buttons");
let selected_choice = null;

let curr_index = 0;
let total_index = questions.length;
let answer = [];

function showquestion(i) {
  curr_index = i;
  question_.textContent = questions[i];
  options.innerHTML = "";

  // Reset selected_choice to current stored answer (if any)
  selected_choice = answer[i] || null;

  for (let j = 0; j < choices[i].length; j++) {
    let btn = document.createElement("button");
    btn.textContent = choices[i][j];
    btn.classList.add("choice_btn");
    btn.type = "button";

    // Highlight previously selected choice
    if (answer[i] === btn.textContent) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", function () {
      selected_choice = this.textContent;
      answer[i] = selected_choice;

      Array.from(options.children).forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      console.log(`Selected choice for question ${i}: ${selected_choice}`);
    });

    options.appendChild(btn);

    if ((j + 1) % 2 === 0) {
      options.appendChild(document.createElement("br"));
    }
  }

  // Show or hide navigation buttons as needed
  prev.style.display = i === 0 ? "none" : "inline-block";
  next.style.display = i === total_index - 1 ? "none" : "inline-block";
}

next.addEventListener("click", function () {
  if (curr_index < total_index - 1) {
    curr_index++;
    showquestion(curr_index);
  }
});

prev.addEventListener("click", function () {
  if (curr_index > 0) {
    curr_index--;
    showquestion(curr_index);
  }
});

let score=0;
score_show = () => {
  for(i=0;i<answers.length;i++){
    if(answer[i]===answers[i]){
      score++;
    }
  }
  add_break=document.createElement("div");
  add_para= document.createElement("p");
  reset = document.createElement("button");
  reset.classList.add("button");
  reset.type="reset";
  reset.textContent="RESET";
  reset.id="reset_btn";
  divinputs = document.getElementsByClassName("divinputs")[0];
  container = document.getElementsByClassName("container")[0];
  divinputs.style.display="none";
  container.classList.add="extend";
  container.appendChild(add_break);
  add_para.textContent=`Score is: ${score}`;
  container.appendChild(add_para);
  container.appendChild(reset);
  console.log("Your score is: ",score);
  document.getElementById("reset_btn").addEventListener("click", function(event) {
  window.location.reload();
});
}


submit.addEventListener("click", function (event) {
  event.preventDefault();
  if(answer.length===answers.length){
    if (answer[curr_index]) {
      console.log("Answer array:", answer);
      score_show();
      // Here you can add code to calculate score or show results
    } else {
      console.log("No choice selected for the current question");
    }
  }
});


// Start quiz button
document.getElementById("starts").addEventListener("click", function (event) {
  event.preventDefault();
  this.style.display = "none";
  showquestion(curr_index);
});
