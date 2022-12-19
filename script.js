Java.perform(function() {
    var PM = Java.use("re.obfuscator.challenge01.VCyPLJeiyfu");
    PM.PGPyIMEWUxFr.overload("java.lang.String").implementation = function(str) {
        var ret = this.PGPyIMEWUxFr(str);
        var input = JSON.parse(str);
        var login = input[0];
        var password = input[1];
        if (login == "") {
            console.log("You didn't enter any login info");
        }
        if (password == "") {
            console.log("You didn't enter any password info");
        }
        console.log("login : ", login);
        console.log("password : ", password);
        if (ret == false) {
            console.log("Try again dude , its challenge from romain thomas , its not that easy");
        } else {
            console.log("Bingo ! You solved it :)");
            console.log("login : ", login);
            console.log("password : ", password);
        }
        console.log("PGPyIMEWUxFr Ret : ", ret);
        return ret;
        //return true will give proper allowed solution but thats not valid solution 
    }

})