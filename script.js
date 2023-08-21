function calculateMinCost() {
  //your code heredocument.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('ropesInput');
    const calculateButton = document.getElementById('calculateButton');
    const resultElement = document.getElementById('result');
    
    calculateButton.addEventListener('click', function() {
        const inputValues = inputElement.value.split(',').map(Number);
        const minCost = connectRopesMinCost(inputValues);
        resultElement.textContent = `Minimum Cost: ${minCost}`;
    });
    
    function connectRopesMinCost(ropesLengths) {
        if (ropesLengths.length <= 1) {
            return 0;
        }
        
        ropesLengths.sort((a, b) => a - b);
        
        let totalCost = 0;
        let currentRopeIndex = 0;
        
        while (currentRopeIndex < ropesLengths.length - 1) {
            const sum = ropesLengths[currentRopeIndex] + ropesLengths[currentRopeIndex + 1];
            totalCost += sum;
            ropesLengths[currentRopeIndex + 1] = sum;
            currentRopeIndex++;
        }
        
        return totalCost;
    }
})

  
  
  
}  ;




    
   
         
