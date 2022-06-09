let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let specialChars = ['!', '@', '#', '$', '%', '&', '?'];

let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let displayPass = '';


var d = new Vue({
    el: '#generator',
    data: {
        password: displayPass
    }
})




document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    let special = false;
    
    let numbers = false;
    
    let pLength = document.getElementById('input-selector');
    
    let specBox = document.getElementById('input-special');
    
    let numBox = document.getElementById('input-nums');
    
    let pString = '';

    if (specBox.checked) {
        special = true;
    }

    if (numBox.checked) {
        numbers = true;
    }

    if (special === false && numbers === false) {
        
        //generate plain text password
        let lengthV = parseInt(pLength.value);

        for (i = 0; i < lengthV; i++) {
            
            let ranNum = Math.floor(Math.random() * 26);
            
            let newChoice = letters[ranNum];
           
            pString += newChoice;
        }
        
        d.password = pString;
        
    } else if (special && !numbers) {
        
        //generate plain text w/ special chars
        let lengthV2 = parseInt(pLength.value);

        for (i = 0; i < lengthV2; i++) {
            
            if (i % 2 === 0) {
                
                let ranNum = Math.floor(Math.random() * 26);
                
                let newChoice = letters[ranNum];
                
                pString += newChoice;
                
            } else {
                
                let ranNum = Math.floor(Math.random() * 7);
                
                let newChoice = specialChars[ranNum];
                
                pString += newChoice;
            }
        }
        
        d.password = pString;
        
    } else if (special && numbers) {
        
        //plain text w/ nums & special
        let lengthV3 = parseInt(pLength.value);

        for (i = 0; i < lengthV3; i++) {
            
            if (i % 2 === 0) {
                
                let ranNum = Math.floor(Math.random() * 26);
                
                let newChoice = letters[ranNum];
                
                pString += newChoice;
                
            } else if (i % 4 === 1 || i % 4 === 2) {
                
                let ranNum = Math.floor(Math.random() * 10);
                
                let newChoice = nums[ranNum];
                
                pString += newChoice;
                
            } else {
                
                let ranNum = Math.floor(Math.random() * 7);
                
                let newChoice = specialChars[ranNum];
                
                pString += newChoice;
            }
        }
        
        d.password = pString;

    } else {

        let lengthV4 = parseInt(pLength.value);

        for (i = 0; i < lengthV4; i++) {
            
            if (i % 2 === 0) {
                
                let ranNum = Math.floor(Math.random() * 10);
                
                let newChoice = nums[ranNum];
                
                pString += newChoice;
            }
            else {
                
                let ranNum = Math.floor(Math.random() * 26);

                let newChoice = letters[ranNum];
                
                pString += newChoice;
            }
        }
        d.password = pString;
    }
});

