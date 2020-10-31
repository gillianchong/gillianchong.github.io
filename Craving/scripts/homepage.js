function SignIn (Username, Email Address, Password){
    let body = {
        signin: {
         username:guestName,
         emailaddress:guestEmail,
         password:guestPassword
        }
      }
}
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