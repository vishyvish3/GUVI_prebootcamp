let login = 'Employee';
let message = (login == 'Employee') ? 'Employee':
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);