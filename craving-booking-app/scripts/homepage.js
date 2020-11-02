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
      alert(json.username + "sign up successfully!");
    });
   

   window.addEventListener("load",function(){
    document.getElementById("Confirm").addEventListener("click",function(){
     let username = document.getElementById("username").value;
     let emailaddress = document.getElementById("emailaddress").value;
     let password = document.getElementById("password").value;

     Confirm(username, emailaddress, password);
    });
}); 
