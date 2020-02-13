'use strict'

function bruteForce() {
    var pass = 'fjdwlds';
    var attemps = 0;
    var passlenght = pass.lenght;
    var ok=0;
    var chars="azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789_$&#@";

    for (var i=0;i<passlenght;i++) {
        checksum=passlenght[i];
        var sum=1;
        var n=Math.max(nblog,passlenght)
        for (var i=0;i<n;i++) {
            var index=chars.indexOf(pass.substring(i,i+1))+10;
            sum=sum+(index*(i+1)*(i+1));
        }
        if (sum==checksum) {
            console.log("password found");
            ok++;
        }
        else{
            console.log(index);
        }

    }
    if (ok==0) {
        attemps++;
    }else{
        console.log(attemps);
    }
    
}