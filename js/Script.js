let HardButtons = document.getElementsByClassName('HardButton')
 let countHard = document.getElementById('countHard');
 let copyButton = document.getElementsByClassName('copyButton');


 let TimeArray = [];
for(const HardButton of HardButtons){
    HardButton.addEventListener('click', function(){
       countHard.innerText++;
    })
};


function HandelFunction(id, code, name){
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
            name:name,
            code:code,
            date: new Date().toLocaleTimeString()
        }

        TimeArray.push(timeObj);
        console.log(TimeArray)

    });

}
HandelFunction('NationalEmergency' ,999, 'জাতীয় জরুরি সেবা' )

HandelFunction('Police' , 999, 'পুলিশ')

HandelFunction('FireService', 999, 'ফায়ার সার্ভিস')

HandelFunction('Ambulance' , 1994999999, 'অ্যাম্বুলেন্স')

HandelFunction('WomenChild' , 109, 'নারী ও শিশু সহায়তা')

HandelFunction('AntiCorruption' , 106, 'দুদক')

HandelFunction('ElectricityOutage' , 16216, 'বিদ্যুৎ বিভ্রাট')

HandelFunction('Brac' , 16445, 'ব্র্যাক')
HandelFunction('BangladeshRailway' , 163, 'বাংলাদেশ রেলওয়ে');


function renderTimeEntryFunc(id){
   const rederTimeEntry = document.getElementById(id)
  rederTimeEntry.addEventListener('click', function(){
  const ClockContainer  = document.getElementById('ClockContainer');
  ClockContainer.innerHTML = '';
   for(let TimeArr of TimeArray){
   const div = document.createElement('div');
   div.innerHTML = `
         <div class="p-3 rounded-2xl bg-gray-200 mt-3">
                           <div class="flex justify-between items-center">
                             <h1 class="md:text-lg font-bold text-base">${TimeArr.name}</h1>
                              <p class="text-lg font-semibold">${TimeArr.date}</p>
                           </div>
                           <p class="text-lg text-gray-500">${TimeArr.code}</p>
                       </div>    
        
        `
       ClockContainer.appendChild(div)
      }
   })
}


renderTimeEntryFunc('NationalEmergency' )

renderTimeEntryFunc('Police')

renderTimeEntryFunc('FireService')

renderTimeEntryFunc('Ambulance' )

renderTimeEntryFunc('WomenChild' )

renderTimeEntryFunc('AntiCorruption')

renderTimeEntryFunc('ElectricityOutage')

renderTimeEntryFunc('Brac')
renderTimeEntryFunc('BangladeshRailway');



document.getElementById('ClearButton').addEventListener('click', function(){
    document.getElementById('ClockContainer').innerHTML = '';
    TimeArray = [];

});




// onerther Way copy Functiuonality  


for(let copyBtn of copyButton){
    copyBtn.addEventListener('click', function(){
        // console.log('Button copyed' , copyBtn)
       const getCopyText = copyBtn.parentNode.parentNode.childNodes[7].innerText;
       navigator.clipboard.writeText(getCopyText);
       alert(`The number has been copied: ${getCopyText}`);
       let copyCount = document.getElementById('copyCount');
       copyCount.innerText++;
    })
}




