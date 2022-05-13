// /////////////////////////////////////////////
//      ///////// EXERCICE 2 /////////
// /////////////////////////////////////////////


// CONSIGNE  : Faire une fonction qui permet de transformer un tableau en un tableau d'object :

// let emails = ['stephane.lanier.a_d_g@xyz.com', 'john.doe.b_c@yahoo.fr'];
// let person = [{
    //     email: 'stephane.lanier.a_d_g@xyz.com',
    //     firstName: 'stephane',
    //     lastName: 'lanier',
    //     departments: ['A']
    // }, {
        // ...
    // }];

    let emails = ['stephane.lanier.a_d_g@xyz.com', 'john.doe.b_c@yahoo.fr'];

    function parseEmails(emails){
        let result = [];
    
        emails.forEach((email) =>{
            let infos = email.split('@')[0].split('.');
            let departments = infos[2].toUpperCase().split('_');
    
            let person = {
                email: email,
                firstName: infos[0],
                lastName: infos[1],
                departments: departments
            }
    
            result.push(person);
        })
        return result;
    }
    console.log(parseEmails(emails));