const btn = document.querySelector("#btn");
const content = document.querySelector("#content");
const voice = document.querySelector("#voice");

function speak (text){
    const textToSpech = new SpeechSynthesisUtterance(text);
    textToSpech.rate = 1;
    textToSpech.pitch = 1;
    textToSpech.volume = 1;
    textToSpech.lang = "hi-GB";
    window.speechSynthesis.speak(textToSpech);
}

function wishMe(){
    const day  = new Date();
    const hours  = day.getHours();
    if(hours >=0 && hours < 12){
        speak("Good Morning boss");
    }else if(hours >= 12 && hours < 18){
        speak("Good Afternoon boss");
    }else{
        speak("Good Evening  Boss");

    }
    
    
}
window.addEventListener('load' , ()=>{
    wishMe();
})

 const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 const recognition = new speechRecognition();


 recognition.onresult = (event) => {
 const currentIndex =  event.resultIndex
 const transcript =   event.results[currentIndex][0].transcript
 content.innerHTML = transcript;
 takeCommand(transcript.toLowerCase());
};
btn.addEventListener('click' , ()=>{
    recognition.start()
    btn.style.display = 'none';
    voice.style.display = 'block';
})

function takeCommand(message){
    btn.style.display = 'flex';
    voice.style.display = 'none';
    if(message.includes('hello')){
        speak("Hello Boss ,how are you.... . How can I help you")
    }
    else if(message.includes('who are you')){
        speak("I am  AI Assistant Nova, created by  Rahul sir")
    }
    else if (message.includes('open youtube')){
        speak("Opening Youtube")
        window.open("https://www.youtube.com", "_blank")
    }
    else if (message.includes('open google')){
        speak("Opening Google")
        window.open("https://www.google.com", "_blank")
    }
    else if (message.includes('time')){ 
        const time = new Date().toLocaleString("en-US", {hour: 'numeric', minute: 'numeric'});
        speak(`The time is ${time}`)
    }else if (message.includes('facebook')){
        speak("Opening Facebook")
        window.open("https://www.facebook.com", "_blank")
    }else if (message.includes('instagram')){
        speak("Opening Instagram")
        window.open("https://www.instagram.com", "_blank")
    }
    else if (message.includes('calculator')){
        speak("Opening Calculator")
        window.open("calculator://")
    }
    else if (message.includes('whatsapp')){
        speak("Openin whatsapp")
        window.open("whatsapp://")
    }
    else{
        const finalText = "this is what i found on internet regarding" + message.replace("titli", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("titli")}`, "_blank")
    }
}