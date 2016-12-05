$(document).ready(function(){
    
    var regEx = /^[A-Za-z0-9]{8,15}$/;  //compare something (usually string) to see if the inside word exists.
    var regImg = /\.(gif|png|jpg)$/;
    var regMovie = /^[A-Za-z ]{1,}$/;
    var regComment = /^.{1,100}$/;
    
    var inputName = document.getElementById("input_name");
    var inputImg = document.getElementById("input_img");
    var inputMovie = document.getElementById("input_movie");
    var inputComm = document.getElementById("input_comment");
    var errorDiv = document.getElementById("error_msg");
    var subBut = document.getElementById("submit_button");
    var botDiv = document.getElementById("bottom");
    var userImg = document.getElementById("user_img");
    var posterImg = document.getElementById("poster");
    var unDiv = document.getElementById("user_name");
    var commP = document.getElementById("comment");
    
    
    inputName.onkeyup = function() {
        console.log(regEx.test(inputName.value));
        if (regEx.test(inputName.value)) {
            inputName.style.color = "#0F0";
            inputName.style.borderColor = "#0F0";
            errorDiv.innerHTML = "Your user name is correctly inputted."; 
        } else {
            inputName.style.color = "#F00";
            inputName.style.borderColor = "#F00";
            errorDiv.innerHTML = "Your user name must be 8 to 15 character of letters or numbers."; 
        };
        var n = regEx.test(inputName.value);
        var i = regImg.test(inputImg.value);
        var m = regMovie.test(inputMovie.value);
        var c = regComment.test(inputComm.value);

        if (n && i && m && c) {
            subBut.style.visibility = "visible";        
        };
    };
    
    inputImg.onkeyup = function() {
        console.log(regImg.test(inputImg.value));
        if (regImg.test(inputImg.value)) {
            inputImg.style.color = "#0F0";
            inputImg.style.borderColor = "#0F0";
            errorDiv.innerHTML = "Your Img Link is okay.";            
        } else {
            inputImg.style.color = "#F00";
            inputImg.style.borderColor = "#F00";
            errorDiv.innerHTML = "Img link must end in 'jpg', 'png', or 'gif'.";            
        };
        n = regEx.test(inputName.value);
        i = regImg.test(inputImg.value);
        m = regMovie.test(inputMovie.value);
        c = regComment.test(inputComm.value);

        if (n && i && m && c) {
            subBut.style.visibility = "visible";        
        };
    };
    
    inputMovie.onkeyup = function() {
        console.log(regMovie.test(inputMovie.value));
        if (regMovie.test(inputMovie.value)) {
            inputMovie.style.color = "#0F0";
            inputMovie.style.borderColor = "#0F0";
            errorDiv.innerHTML = "Your movie title is okay.";            
        } else {
            inputMovie.style.color = "#F00";
            inputMovie.style.borderColor = "#F00";
            errorDiv.innerHTML = "Movie title must be only letters or spaces.";            
        };
        n = regEx.test(inputName.value);
        i = regImg.test(inputImg.value);
        m = regMovie.test(inputMovie.value);
        c = regComment.test(inputComm.value);

        if (n && i && m && c) {
            subBut.style.visibility = "visible";        
        };
    };
    
    inputComm.onkeyup = function() {
        console.log(regComment.test(inputComm.value));
        if (regComment.test(inputComm.value)) {
            inputComm.style.color = "#0F0";
            inputComm.style.borderColor = "#0F0";
            errorDiv.innerHTML = "Your Comment is okay.";            
        } else {
            inputComm.style.color = "#F00";
            inputComm.style.borderColor = "#F00";
            errorDiv.innerHTML = "Comment must be 1-100 characters.";            
        };
        
        n = regEx.test(inputName.value);
        i = regImg.test(inputImg.value);
        m = regMovie.test(inputMovie.value);
        c = regComment.test(inputComm.value);

        if (n && i && m && c) {
            subBut.style.visibility = "visible";        
        }; 
    };
    
    subBut.onclick = function() {
        var title = "http://www.omdbapi.com/?t=" + inputMovie.value;
        botDiv.style.visibility = "visible";
        userImg.src = inputImg.value;
        unDiv.innerHTML = inputName.value;
        commP.innerHTML = inputComm.value;  
        $.ajax({
            url:title,
            dataType:"jsonp",
            success:function(resp){
                posterImg.src = resp.Poster;   
            }
        });
    };
});