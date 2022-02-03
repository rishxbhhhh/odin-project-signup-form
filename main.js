// made by Rishabh Rajpurohit
var check = function() {
    var match = false;
    if (document.getElementById('password').value ==
      document.getElementById('conf-password').value) {
        document.getElementsByClassName('message')[0].innerHTML = '';
        match = true;
        document.getElementById('btn-submit').disabled = false;
    } else {
      document.getElementsByClassName('message')[0].style.color = 'red';
      document.getElementsByClassName('message')[0].style.fontSize = '10px';
      document.getElementsByClassName('message')[0].innerHTML = '*password does not match';
      match = false;
      document.getElementById('btn-submit').disabled = true;
    }
  }
 