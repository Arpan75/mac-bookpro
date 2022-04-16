// function-1
function calculateValues(product,value){
    const memoryValue = document.getElementById(product + '-cost');
    const memoryText = parseInt(memoryValue.innerText);
    memoryValue.innerText = value;

    // update costtotal 
    costTotal();
}
// function-2
function getCostValue(product){
    const productCost = document.getElementById(product + '-cost');
    const ProductCostNumber = parseInt(productCost.innerText);
    return ProductCostNumber;
    
}
function costTotal(){
    const bestCostTotal = getCostValue('best'); 
    const memoryCostTotal = getCostValue('memory');
    const storageCostTotal = getCostValue('storage');
    const deliveryCostTotal = getCostValue('delivery');
    const totalCost = bestCostTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal;

    // update on the html
    document.getElementById('total-cost').innerText = totalCost;
}

// function-1
document.getElementById('8memory-value').addEventListener('click',
function (){
    calculateValues('memory',0);
})
document.getElementById('16memory-value').addEventListener('click',
function (){
    calculateValues('memory',20);
})
document.getElementById('256storage-value').addEventListener('click',
function (){
    calculateValues('storage',0);
})
document.getElementById('512storage-value').addEventListener('click',
function (){
    calculateValues('storage',100);
})
document.getElementById('1tbstorage-value').addEventListener('click',
function (){
    calculateValues('storage',180);
})
document.getElementById('free-charge-value').addEventListener('click',
function (){
    calculateValues('delivery',0);
})
document.getElementById('paid-charge-value').addEventListener('click',
function (){
    calculateValues('delivery',20);
})
