console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = document.querySelector("#login").innerText.split("\n")[3].slice(0,-3) ; // Use split and array operations on the login_text string to extract the question

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

let arr=question.split(" ");

function fun(){
for(let i=0;i<arr.length;i++){
    if(arr[i]=="first"){
        answer=parseInt(arr[4]);
        break;
    }
    else if(arr[i]=="second"){
        answer=parseInt(arr[6]);
        break;
    }
    else if(arr[i]=="add"){
        answer=parseInt(arr[2]) + parseInt(arr[4]);
        break;
    }

    else if(arr[i]=="subtract"){
        answer=parseInt(arr[2]) - parseInt(arr[4]);
        break;
    }
 }
}

fun();

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;


