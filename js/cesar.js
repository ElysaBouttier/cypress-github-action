
//65_90
function cesar(key,name) {
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetSkip=[]
    for(let i =0; i<26; i++) {
        
        j=i+key;
        if(j<26){
            alphabetSkip.push(alphabet[j]);
        }
        else {
            j=j-26;
            alphabetSkip.push(alphabet[j]);
        }        
    }
    console.log(alphabetSkip)
    
    
    let result=[];
    for(let i=0; i<name.length;i++) {
             
        let pos = alphabet.indexOf(name[i].toUpperCase())
        if(pos > -1){            
            result.push(alphabetSkip[pos]);
        }
        else {
            result.push(name[i]);
        }
        if(name[i].toLowerCase()==name[i]) {
            result[i]=result[i].toLowerCase();
        }        
    }     
    
   
    result=result.join('');
    return result;    
}

a=cesar(3,'Hello World');
// console.log(a);