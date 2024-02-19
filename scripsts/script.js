const allbutn = document.getElementsByClassName ("add-button");
let count = 8;
let sum= 0;
for(const btn of allbutn) {
    btn.addEventListener("click",function(e){
      count = count - 1;
//  const placeName = e.target.parentNode.childNodes [1].innerText

  

      setinnertext("seat-count",count);
    //   ...........................
    sum=sum+parseInt('550');
    const totalCost = document.getElementById("total-cost");
    totalCost.innerText = sum; 

// ............................
const ticketShow = document.getElementById('selected-ticket-container');

              // set inner text
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
            //   append to div
        li.appendChild(p);    
        li.appendChild(p1);    
        li.appendChild(p2);
        
        ticketShow.appendChild(li);



    })
}

function setinnertext(id,value){
    document.getElementById(id).innerText =
    value;  
}
