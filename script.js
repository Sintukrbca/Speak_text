const text=document.getElementById("input");
const speak=()=>{
    let utterance=new SpeechSynthesisUtterance(text.value);
    window.speechSynthesis.speak(utterance);
}