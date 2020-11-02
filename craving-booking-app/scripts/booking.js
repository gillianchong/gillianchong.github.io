function BookNow (guestName, guestEmail, guestPhone, guestPax, guestHotel, guestCheckin, guestCheckout, guestPayment, guestRemarks) {
    let url = 'https://api.sheety.co/5c1a3167570b84950870483f1c80fbf9/cravingBookingList/booking';
    let body = {
      booking: {
       name:guestName,
       email:guestEmail,
       phonenumber:guestPhone,
       pax:guestPax,
       hotel:guestHotel,
       checkindate:guestCheckin,
       checkoutdate:guestCheckout,
       payment:guestPayment,
       remarks: guestRemarks
      }
    }
  
    function BookNow() {
      alert("Your booking is successfully added! Please check at view booking site!");
    }
  

   window.addEventListener("load",function(){
       document.getElementById("BookNow").addEventListener("click",function(){
        let name = document.getElementById("guestName").value;
        let email = document.getElementById("guestEmail").value;
        let phonenumber = document.getElementById("guestPhone").value;
        let pax = document.getElementById("guestPax").value;
        let hotel = document.getElementById("guestHotel").value;
        let checkindate = document.getElementById("guestCheckin").value;
        let checkoutdate = document.getElementById("guestCheckout").value;
        let payment = document.getElementById("guestPayment").value;
        let remarks = document.getElementById("guestRemarks").value;

        
        BookNow(name, email, phonenumber, pax, hotel, checkindate, checkoutdate, payment, remarks);
       });
   });
   