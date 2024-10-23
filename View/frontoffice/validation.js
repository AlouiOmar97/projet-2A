
//document.getElementById('addOfferForm').addEventListener('submit',function (){})
document.getElementById('addOfferForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    var title= document.getElementById('title').value;
    var destination= document.getElementById('destination').value;
    var departureDate= document.getElementById('dd').value;
    var returnDate= document.getElementById('rd').value;
    var price= document.getElementById('price').value;

    var isValid= true
    function displayMessage(id, msg, isError){
        var element= document.getElementById(id + '_error')
        element.innerHTML= msg
        if(isError){
            //element.style.color='red'
            element.className='alert alert-danger'
        }else{
            //element.style.color='green'
            element.className='alert alert-success'
        }

    }
    if(title.length < 3){
        isValid= false
        console.log('title must have at least 3 caracters !')
        displayMessage('title','title must have at least 3 caracters !',true)
    }else{
        displayMessage('title','Title is valid !',false)
    }
    var destinationPattern= /^[A-Za-z\s]{3,}$/;
    if(!destinationPattern.test(destination)){
        isValid= false
        console.log('Destination must contain only letters, spaces and have at least 3 caracters !')
        displayMessage('destination','Destination must contain only letters, spaces and have at least 3 caracters !',true)
    }else{
        displayMessage('destination','Destination is valid !',false)
    }
    /*console.log("Departure Date")
    console.log(new Date(departureDate))*/
    if(new Date(departureDate) == 'Invalid Date' || new Date(returnDate) == 'Invalid Date'){
        isValid= false
        console.log('Departure/Return Date is not a valid date !')
        displayMessage('dd','Departure/Return Date is not a valid date !',true)
    }else{
        displayMessage('dd','Destination/Return Date is valid !',false)
    }

    if(new Date(departureDate) >= new Date(returnDate)){
        isValid= false
        console.log('Return Date must be greater than the Departure Date !')
        displayMessage('rd','Return Date must be greater than the Departure Date !',true)
    }else{
        displayMessage('rd','Return Date is valid !',false)
    }

    if(price < 0){
        isValid= false
        console.log('Price must be a positive number !')
        // alert('error price')
        displayMessage('price','Price must be a positive number !',true)
    }else{
        displayMessage('price','Price is valid !',false)
    }

})


document.addEventListener('DOMContentLoaded',()=>{
    var title= document.getElementById('title');
    var destination= document.getElementById('destination');
    function displayMessage(id, msg, isError){
        var element= document.getElementById(id + '_error')
        element.innerHTML= msg
        if(isError){
            //element.style.color='red'
            element.className='alert alert-danger'
        }else{
            //element.style.color='green'
            element.className='alert alert-success'
        }

    }
    title.addEventListener('keyup',()=>{
        console.log('keyup title')
        if(title.value.length < 3){
            console.log('title must have at least 3 caracters !')
            displayMessage('title','title must have at least 3 caracters !',true)
        }else{
            displayMessage('title','Title is valid !',false)
        }
    })

    destination.addEventListener('keyup',destinationValidation)

    function destinationValidation(){
        var destinationPattern= /^[A-Za-z\s]{3,}$/;
    if(!destinationPattern.test(destination.value)){
        isValid= false
        console.log('Destination must contain only letters, spaces and have at least 3 caracters !')
        displayMessage('destination','Destination must contain only letters, spaces and have at least 3 caracters !',true)
    }else{
        displayMessage('destination','Destination is valid !',false)
    }
    }


})