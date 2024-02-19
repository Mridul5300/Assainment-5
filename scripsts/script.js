const allbutn = document.getElementsByClassName ("add-button");
let count = 8;
let sum= 0;
let sum2= 0;
for(const btn of allbutn) {
    btn.addEventListener("click",function(e){
      count = count - 1;
  
     
      setinnertext("seat-count",count);
//  ........
    sum=sum+parseInt('550');
    const totalCost = document.getElementById("total-cost");
    totalCost.innerText = sum; 

      btn.style.backgroundColor="green"
      btn.style.color="white"

   
        sum2 =sum2+parseInt('550');
        const grandTotal = document.getElementById("grand-total");
        grandTotal.innerText = sum2; 

// ............................
  const ticketShow = document.getElementById('selected-ticket-container');

        const li = document.createElement('ul');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';

        const p = document.createElement('p');
        p.innerText = btn.innerText;

        const p1 = document.createElement('p');
        p1.innerText = "Economy";

        const p2 = document.createElement('p');
        p2.innerText = "550";
        let price = p2.innerText;
        li.appendChild(p);    
        li.appendChild(p1);    
        li.appendChild(p2);
        
        ticketShow.appendChild(li);
        // Allert option..........
       
        if(count === 4){
            alert("Ar hoba na")
        }
// ...........


    
    })
}

// cuppon code 
const apply = document.getElementById('apply');
apply.addEventListener('click', function(){
    const couponElement = document.getElementById('input-text').value;
    const convertCoupon = couponElement.split(' ').join('').toUpperCase();
    if(convertCoupon === 'NEW15'){
        const grandPriceElement = document.getElementById('grand-total');
        const grantTotal = sum * 0.15;
        const discountGrantTotal = sum - grantTotal ;
        grandPriceElement.innerText = discountGrantTotal;
         document.getElementById('input-text').value = '';
        const inputDiv = document.getElementById('fieled');
        inputDiv.classList.add('hidden')
         
    }else if(convertCoupon === 'COUPLE20'){
        const grandPriceElement = document.getElementById('grand-total');
        const grantTotal = sum * 0.20;
        const discountGrantTotal = sum - grantTotal ;
        grandPriceElement.innerText = discountGrantTotal;
       
         document.getElementById('input-text').value = '';
        const inputDiv = document.getElementById('fieled');
        inputDiv.classList.add('hidden')
    }
    else{
        alert('Invalid Coupon code')
        document.getElementById('input-field').value = '';
    }
})


function setinnertext(id,value){
    document.getElementById(id).innerText =
    value;  
}
