//get function count from module file
import {Count}from './module.js';
//define the variable and export it
export const eventName = document.getElementById('name');
export const dateOfEvent = document.getElementById('date');
export const startButton = document.getElementById('start');
export const countDiv = document.getElementById('countdown');
export let countDown;

    // add event to the button when user clicked it
startButton.addEventListener('click',(e)=>{    
       e.preventDefault();
    //start count down to event
       countDown = setInterval(() => {
        //calling function count
            Count()   
           }, 1000);
    });