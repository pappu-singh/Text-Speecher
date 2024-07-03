const input = document.querySelector("#text");
const speakBtn = document.querySelector(".btn");

speakBtn.disabled = true;
speakBtn.style.cursor = "no-drop"
input.addEventListener("keyup", ()=> {
    if(input.value.length === 0){

        speakBtn.disabled = true;
        speakBtn.style.cursor = "no-drop";
    }else {
        speakBtn.disabled = false;
        speakBtn.style.cursor = "pointer"
    }
    
})
  

speakBtn.addEventListener("click", () => {
    const inputText = input.value;
    const utterThis = new SpeechSynthesisUtterance (inputText);

    speechSynthesis.speak(utterThis);
})