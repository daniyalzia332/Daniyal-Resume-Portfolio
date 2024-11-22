// const form = document.querySelector(form);

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

// var faaz = document.querySelector(form)

// function test() {
//   console.log(x);
//   let x = 5;
// }

function showsidebar(){
  const siderbar = document.querySelector('.sidebar')
  siderbar.style.display = 'flex'
}

function hidesidebar(){
  const siderbar = document.querySelector('.sidebar')
  siderbar.style.display = 'none'
}

// Typed js

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Graphics Designer', 'Digital Marketer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});