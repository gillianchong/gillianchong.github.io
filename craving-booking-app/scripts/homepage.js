function checkPassword() {
  var password = document.getElementById("password").value;

  if (password.length < 8) {
   alert("Password must be more than 8 characters");
  } else {
   alert("Password accepted!");
  }
}

var elPassword = document.getElementById ("password");
elPassword.onblur = checkPassword;


/*fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
     "Content-Type":"application/json"
    }
  })
  .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.homepage);
      alert(json.username + "successfully added!");
    });
   }

   window.addEventListener("load",function(){
    document.getElementById("Confirm").addEventListener("click",function(){
     let username = document.getElementById("guestName").value;
     let emailaddress = document.getElementById("guestEmail").value;
     let password = document.getElementById("guestPassword").value;

     Confirm(username, emailaddress, password);
    });
}); */
