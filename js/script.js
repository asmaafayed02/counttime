//define the variable
var eventName = document.getElementById('name'),
    dateOfEvent = document.getElementById('date'),
    startButton = document.getElementById('start'),
    countDiv = document.getElementById('countdown');
  let countDown = setInterval(() => {
        'use strict';
         Count()
    }, 1000);
    //start function to countdown the time of event
function Count(){
    // add event to the button when user clicked it
    startButton.addEventListener('click',(e)=>{
        e.preventDefault();
        //check the validation 
        if(eventName.value == "" || dateOfEvent.value == ""){
            window.alert('plese fill all input fields')
        }else{
        //the date of today
        let theDateNow = new Date();
        //convert to mill second
        let millDate = theDateNow.getTime();
        //the date of the event and convert it to mill second 
        let eDate = new Date(dateOfEvent.value).getTime();
        
       let theDatecount = eDate - millDate,//فرق الوقت بين اليوم وميعاد الحدث
       //millS = 1/1000s,  s= 1/60 min, min = 1/60 hour , hour=1/24 day so we convert
           numberOfDays = Math.floor(theDatecount / (1000*60*60*24)),
           numberOfHours = Math.floor((theDatecount % (1000*60*60*24))/ 1000*60*60),
           numberOfMinuts = Math.floor((theDatecount % (1000*60*60))/ 1000*60),
           numberOfSeconds = Math.floor((theDatecount % (1000*60))/ 1000)
         //put the name and the time of event  inside the div 
           countDiv.innerText = 
           `the evene is: ` + eventName.value +
           `and the remtime is: ` + numberOfDays + ' : ' + numberOfHours +' : ' +
                                    numberOfMinuts + ' : ' + numberOfSeconds;
        //Decrease one second every 1000 mill second
            if(theDatecount > 0 ){
               theDatecount -= 1;
            }else{ //stop count down timer
               clearInterval(countDown);
               countDiv.innerText = 'the event is now'; 
            }
        
        }                      
    })
}

