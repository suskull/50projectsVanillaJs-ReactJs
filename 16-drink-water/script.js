const littersRemainEl = document.getElementById('liters');
const percentageEl = document.getElementById('percentage');
const cupSmalls = document.querySelectorAll('.cup-small')
const remainedEl = document.querySelector('.remained')

console.log(littersRemainEl)
console.log(percentageEl)
console.log(cupSmalls)
// percentageEl.style.height = '20%'
 percentageEl.style.visibility = 'visible'

cupSmalls.forEach((cup, idx) => {
    
    cup.addEventListener('click', () => {
       
        cupSmalls.forEach((cup, idx2) =>{
            console.log(cup)
            if(idx2 <= idx) {
                cup.classList.add('full')
            } else {
                cup.classList.remove('full')
            }
        })
        
        const filled = ((idx + 1) / cupSmalls.length) * 100
        
        percentageEl.style.height = `${filled}%`
        percentageEl.innerText = `${filled}%`
        littersRemainEl.innerText = `${(1 - filled/100) * 2}L`
        
        if(filled === 100) {
           remainedEl.style.height = 0
        }
       
    })   
})