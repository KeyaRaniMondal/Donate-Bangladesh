// Home to Blog and Blog to Home page transaction

document.getElementById('bloG').addEventListener('click', function () {
    if (document.getElementById('bloG').id === 'bloG')
        window.location.href = 'blog.html'
})


// Donate for Flood at Noakhali
document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();

    // donated amount
    getDonationByID('donation');

    // total amount
    getTotalAmountByID('amount');

    // check valid number and donate money
    checkValidity('amount','newdonate');

})



// Donate for Flood at Feni
document.getElementById('btn-donate1').addEventListener('click', function (event) {
    event.preventDefault();

    // donated amount
    getDonationByID('donation1');

    // total amount
    getTotalAmountByID('amount');

    // check valid number and donate money
    checkValidity('amount','newdonate1');

})



// Donate for Aid fir quota movement
document.getElementById('btn-donate2').addEventListener('click', function (event) {
    event.preventDefault();

    // donated amount
    getDonationByID('donation2');

    // total amount
    getTotalAmountByID('amount');

    // check valid number and donate money
    checkValidity('amount','newdonate2');

})




