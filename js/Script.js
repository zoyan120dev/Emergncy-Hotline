let HardButtons = document.getElementsByClassName('HardButton')
 let countHard = document.getElementById('countHard');
 let TimeArray = [];
for(const HardButton of HardButtons){
    HardButton.addEventListener('click', function(){
       countHard.innerText++;
    })
};



function HandelFunction(id, code){
    const CallFunctionality = document.getElementById(id)
    CallFunctionality.addEventListener('click', function(){
       let AcouuntBalance = parseInt(document.getElementById('AcouuntBalance').innerText);
        let minusBalance = 20;
        if(AcouuntBalance <= 0){
            alert('❌ You dont have enough coins. You need at least 20 coins to make a call.')
            return;
        }else{
          AcouuntBalance -= minusBalance;
          document.getElementById('AcouuntBalance').innerText  = AcouuntBalance;
          alert('📞 Calling National Emergency Number ' + code)
        }

        let timeObj = {
            name: id,
            code:code,
            date: new Date().toLocaleTimeString()
        }

        TimeArray.push(timeObj);
        console.log(TimeArray)

    });

}

HandelFunction('NationalEmergency' ,999, )

HandelFunction('Police' , 999)

HandelFunction('FireService', 999)

HandelFunction('Ambulance' , 1994-999999)

HandelFunction('WomenChild' , 109)

HandelFunction('AntiCorruption' , 106)

HandelFunction('ElectricityOutage' , 16216)

HandelFunction('Brac' , 16445)

HandelFunction('BangladeshRailway' , 163);

function ClockFunctionality(){
    const ClockContainer  = document.getElementById('"ClockContainer');
    

}







