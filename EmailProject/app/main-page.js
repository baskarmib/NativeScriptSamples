

function sendEmail()
{
  var http = require('http');
  const data = JSON.stringify({
    content: [
      {
        "type": "text/html", 
        "value": "<html><p>Hello, world!</p></html>"
      }
    ], 
    from: {
      email: "Primary Email Address Associated with Send Grid Account", 
      name: "FromName"
    }, 
    personalizations: [
      {
        subject: "Hello, World from NativeScript", 
        to: [
          {
            email: "toemailAddress", 
            name: "toname"
          }
        ]
      }
    ], 
    subject: "Hello, World!"
  });  

  console.log(data);
  http.request({
    url: "https://api.sendgrid.com/v3/mail/send",
    method: "POST",
    headers: {"Authorization":"Bearer YourSendGridAPIKey", "Content-Type":"application/json"},
    content: data
}).then(response => {
    var result = response.content.toJSON();
    console.log(result);
}, error => {
    console.error(error);
});

}
exports.sendEmail = sendEmail;