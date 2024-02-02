// const button = document.getElementById("button");

  // button.addEventListener('click',function () {
  //   // var params = {
  //   //   const name = document.getElementById("name").value,
  //   //   email: document.getElementById("email").value,
  //   //   message: document.getElementById("message").value,
  //   // };
  
  //   const serviceID = "service_7jbo24h";
  //   const templateID = "template_nig6ruo";

  //   const name = document.getElementById("name");
  //   const email = document.getElementById("email");
  //   const message = document.getElementById("message");

  
  //     emailjs.send(serviceID, templateID, )
  //     .then(res=>{
  //       if (name.value === "" || email.value === "" || message.value === "") {
  //         alert("voleur c'est qui Codeloccol")
  //       }else{
  //         alert("Your message sent successfully!!");
  //         name.value = "";
  //         message.value = "";
  //         email.value = "";
  //       }
  //         // document.getElementById("name").value = "";
  //         // document.getElementById("email").value = "";
  //         // document.getElementById("message").value = "";
  //         // console.log(res);
  //         // alert("Your message sent successfully!!");
  //     })
  //     .catch(err=>console.log(err));
  // });


  const button = document.getElementById("button");

  button.addEventListener('click',function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const serviceID = "service_7jbo24h";
    const templateID = "template_nig6ruo";

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
    } else {
      emailjs.send(serviceID, templateID, {name: name, email: email, message: message})
      .then(res=>{
        alert("Your message was sent successfully!!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch(err=>console.log(err));
    }
  });