fetch(url, {
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
}); 
