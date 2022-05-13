// /////////////////////////////////////////////
//      ///////// EXERCICE 1 /////////
// /////////////////////////////////////////////


// CONSIGNE  : Passer d'une variable à un object :

// let email = 'stephane.lanier.a@xyz.com';
// let person = {
    //     email: 'stephane.lanier.a@xyz.com',
    //     firstName: 'stephane',
    //     lastName: 'lanier',
    //     departments: ['A']
    // }
    
   
    let email = 'stephane.lanier.a@xyz.com';
    let word = email.split('.');
    
    let beginOfDepartment = email.indexOf(word[2]);
    let endOfDepartment = email.indexOf('@');
    let department = email.substring(beginOfDepartment, endOfDepartment);
    
    let person = {
        email: email,
        firstName: word[0],
        lastName: word[1],
        departments: [department.toUpperCase()]
    }
    console.log(person);