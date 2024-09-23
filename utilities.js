
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
    if (isNaN(d) || d <= 0 || d > a)
        alert('Invalid number of money can not be donated.Please enter positive number of money!!')
    else {
        const newAmount = a - d;
        console.log(newAmount)
        document.getElementById(amount).innerText = newAmount.toFixed(2)

        const old_donation = parseFloat(document.getElementById(newdonate).innerText);
        const totalDonation = old_donation + d;
        console.log(totalDonation)
        document.getElementById(newdonate).innerText = totalDonation.toFixed(2)
        if (document.getElementById('btn-donate'))
            openDonationModal();
        if (document.getElementById('btn-donate1'))
            openDonationModal1();
         if (document.getElementById('btn-donate2'))
            openDonationModal2();

    }
}

// Function to open the modal
function openDonationModal() {
    document.getElementById('my_modal_5').showModal();
    document.getElementById('btn-donate').addEventListener('click', function () {
        document.getElementById('my_modal_5')
    })
}
function openDonationModal1() {
    document.getElementById('my_modal_5').showModal();
    document.getElementById('btn-donate1').addEventListener('click', function () {
        document.getElementById('my_modal_5')
    })
}
function openDonationModal2() {
    document.getElementById('my_modal_5').showModal();
    document.getElementById('btn-donate2').addEventListener('click', function () {
        document.getElementById('my_modal_5')
    })
}


