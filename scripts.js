
function formValidate(){
    var name = document.getElementsByName('name')[0].value.trim();
    var email = document.getElementsByName('email')[0].value.trim();
    var phone = document.getElementsByName('phone')[0].value.trim();
    var message = document.getElementsByName('message')[0].value.trim();

    if (name === "" || email === "" || phone === "" || message === ""){
        alert("All fields are required.");
        return false;
    }
        alert("Message sent successfully.");
        window.location.href = 'index.html';
        return true;
}

