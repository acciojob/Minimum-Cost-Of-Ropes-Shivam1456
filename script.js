// function calculateMinCost() {
//   //your code here
  
  
  
// }  



document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('ropesInput');
    const resultElement = document.getElementById('result');
    
    inputElement.addEventListener('input', function() {
        const inputValues = inputElement.value.split(',').map(Number);
        const minCost = connectRopesMinCost(inputValues);
        resultElement.textContent = minCost;
    });
    
    function connectRopesMinCost(ropesLengths) {
        if (ropesLengths.length <= 1) {
            return 0;
        }
        
        const minHeap = new MinHeap();
        for (const length of ropesLengths) {
            minHeap.insert(length);
        }
        
        let totalCost = 0;
        while (minHeap.size() > 1) {
            const combinedLength = minHeap.extractMin() + minHeap.extractMin();
            totalCost += combinedLength;
            minHeap.insert(combinedLength);
        }
        
        return totalCost;
    }
    
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        
        size() {
            return this.heap.length;
        }
        
        insert(value) {
            this.heap.push(value);
            this.bubbleUp(this.size() - 1);
        }
        
        extractMin() {
            if (this.size() === 0) {
                return null;
            }
            if (this.size() === 1) {
                return this.heap.pop();
            }
            
            const minValue = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.sinkDown(0);
            return minValue;
        }
        
        bubbleUp(index) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (index > 0 && this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                this.bubbleUp(parentIndex);
            }
        }
        
        sinkDown(index) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;
            
            if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            
            if (smallestIndex !== index) {
                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                this.sinkDown(smallestIndex);
            }
        }
    }
});
