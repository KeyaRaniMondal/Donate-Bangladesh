
let d, a;

//Made function to recieve donation amount

function getDonationByID(id) {
    d = parseFloat(document.getElementById(id).value);
    return d;
}


//Made function to get the updated total amount after donation

function getTotalAmountByID(id) {
    a = parseFloat(document.getElementById('amount').innerText);
    return a;
}


// created function to check valid number and donate money
function checkValidity(amount, newdonate) {
    console.log(d,a)
    if (isNaN(d) || d <= 0 || d > a) {
        alert('Invalid number of money can not be donated.Please enter positive number of money!!')
        return;
    }
    else {
        const newAmount = a - d;
        console.log(newAmount)
        document.getElementById(amount).innerText = newAmount.toFixed(2)

        const old_donation = parseFloat(document.getElementById(newdonate).innerText);
        const totalDonation = old_donation + d;
        console.log(totalDonation)
        document.getElementById(newdonate).innerText = totalDonation.toFixed(2)
        document.getElementById('my_modal_5').showModal();

        // // Add to history section
// function myFunction(){
//         const p=document.createElement('p');
//         const date=document.getElementById('history-list').innerHTML=Date();
//         p.innerText=`${d} Taka is Donated for Bangladesh`;
//         console.log(p)
// p.appendChild(date)
//         //common function
//         document.getElementById('history-list').appendChild(p);
//     }

    }
   
}







