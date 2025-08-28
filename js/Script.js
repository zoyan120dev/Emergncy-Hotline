let HardButtons = document.getElementsByClassName('HardButton')
 let countHard = document.getElementById('countHard');

for(const HardButton of HardButtons){
    HardButton.addEventListener('click', function(){
       countHard.innerText++;
    })
};

function HandelFunction(value){
    let AcouuntBalance = parseInt(document.getElementById('AcouuntBalance').innerText);
    const CallFunctionality = document.getElementById('CallFunctionality')
    CallFunctionality.addEventListener('click', function(){
        let minusBalance = 20;

        if(AcouuntBalance > 0){
          alert('you calling 999 Number');
           AcouuntBalance -= minusBalance;
          document.getElementById('AcouuntBalance').innerText = AcouuntBalance;
        }else{
            console.log('apnar jotesto poriman Taka ney')
        }
    })
}

HandelFunction()

