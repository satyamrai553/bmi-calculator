const form = document.querySelector("form");

// console.log(form)
form.addEventListener('submit', (e)=>{
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');
// console.log(height);

if(height === '' || isNaN(height) || height<0){
    result.innerHTML = `Please give vaild height value ${height}`;
}
else if(weight == 0 || isNaN(weight) || weight<0){
    result.innerHTML = `Please give vaild weight value ${weight}`;
}
else{
    let bmi = (weight /((height*height)/10000)).toFixed(2);
    if(bmi>24.9){
        let reduce = (bmi - 24.9).toFixed(1);
        result.innerHTML = `<span>${bmi} You are Overweight! <br> Lose ${reduce}Kg</span>`;
    }
    else if(bmi<18.6){
        let increase = (18.6 - bmi).toFixed(1);
        result.innerHTML = `<span>${bmi} You are Underweight! <br> Gain ${increase}Kg</span>`;
    }
   else{
        
        result.innerHTML = `<span>${bmi} You are healthy!</span>`;
    }
    

    
}

})