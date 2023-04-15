convertEl = document.getElementById("convert-el")
lengthFM = document.getElementById("length-fm")
volumeLg = document.getElementById("volume-lg")
massKp= document.getElementById("mass-kp")

convertEl.addEventListener("click", function(){
    
   let input=document.getElementById("input").value
   
   lengthFM.innerHTML = lengthoutput(input)
   volumeLg.innerHTML = volumeoutput(input)
   massKp.innerHTML = massoutput(input)
   
   
   

})



function lengthoutput(input) {
    let feet=input*3.2808;
    let meter=input*0.3048;
    let result_length = `${input} meters = ${feet.toFixed(3)} feet | ${input} feet = ${meter.toFixed(3)} meters `;
    return result_length;
    
}

function volumeoutput(input) {
    let gallons=input*0.26417;
    let liters=input*3.7854;
    let result_volume = `${input} liters = ${gallons.toFixed(3)} gallons | ${input} gallons = ${liters.toFixed(3)} liters `;
    return result_volume;
    
}

function massoutput(input) {
    let pounds=input*2.2046;
    let kilos=input*0.453592;
    let result_mass = `${input} kilos = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilos.toFixed(3)} kilos `;
    return result_mass;
    
}

//0 meters = 0.000 feet | 0 feet = 0.000 meters

//0 liters = 0.000 gallons | 0 gallons = 0.000 liters

//0 kilos = 0.000 pounds | 0 pounds = 0.000 kilograms

