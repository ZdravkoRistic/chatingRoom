

// Funkcija za slanje notifikacije putem e-maila

let notificationSent = false;


function sendNotification() {

  if (notificationSent) {
    return;
  }
  const templateParams = {
    from_name: "Sender Name",
    to_name: "Recipient Name",
    message: "Klijent je posetio sajt.",
  };

  emailjs.send("service_zfltb7k", "template_4e9wmad", templateParams).then(
    function (response) {
      console.log("E-mail uspešno poslat:", response.status, response.text);
      notificationSent = true;
    },
    function (error) {
      console.log("Greška prilikom slanja e-maila:", error);
    }
  );
}

// Selektujemo formu za chat i polje za unos poruke
const chatForm = document.getElementById("chat-form");
const clientInput = document.getElementById("client-input");
const chatMessages = document.getElementById("chat-messages");
const myInput = document.getElementById("my-input");

// Obrada slanja poruke
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  
    const clientMessage = clientInput.value;
    const serverMessage = myInput.value;
    
    if (clientMessage) {
      appendClientMessage(clientMessage);
    }
    if (serverMessage) {
      appendServerMessage(serverMessage);
    }
    sendNotification();
    clientInput.value = "";
    myInput.value = "";
  
});




function appendClientMessage(message) {
  const li = document.createElement("li");
  li.innerText = "Client: " + message;
  chatMessages.appendChild(li);
}

function appendServerMessage(message) {
  const li = document.createElement("li");
  li.innerText = "Server: " + message;
  chatMessages.appendChild(li);
}

