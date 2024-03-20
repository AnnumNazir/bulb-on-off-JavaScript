// date and time

// let date = new Date()
// document.write(date, '<br>')

// let convert = date.toString()
// let copy = convert.slice(0,16)
// let copy1 = convert.slice(16,25)
// let getday = date.getDay()
// var getmili = date.getTime()

// document.write(copy, '<br>')
// document.write(copy1, '<br>')
// document.write(getday, '<br>')
// document.write(getmili, '<br>')

// let dob = new Date ('August 15, 1990')
// let dobmili = dob.getTime()
// document.write(dobmili, '<br>')
// let minus = getmili - dobmili
// document.write(minus, '<br>')
// let formula = minus / (1000*60*60*24*30*12)
// document.write(formula, '<br>')
// document.write(Math.round(formula) + '<br>')

// function toggle() {
//     let body = document.body;
//    switch(body.style.backgroundColor){
//    case 'black':
//     body.style.backgroundColor ='white'
//     body.style.color='black';
//     break;
//     case 'yellow':
//     body.style.backgroundColor ='black'
//     body.style.color='white';
//     break;
//     default:
//         body.style.backgroundColor ='yellow'
//         body.style.color='black';
//         break;
//     }}

// function btn() {
// let body = document.body('img').src = 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/globeelectric/globe-electric-2697501-90.jpg'


























let currentImage = 1;
function btn() {
  let off = document.getElementById("off");
  let on = document.getElementById("on");
  let btnOff = document.getElementById("btn-off");
  let btnOn = document.getElementById("btn-on");
  let heading = document.getElementById("heading");
  let body = document.body;
  let nightAudio = document.getElementById("nightaudio");
  let dayAudio = document.getElementById("dayaudio");

  if (currentImage === 0) {
    off.style.display = "none";
    btnOff.style.display = "none";
    body.style.backgroundColor = "yellow";
    on.style.display = "block";
    btnOn.style.display = "block";
    heading.style.display = "none";
    dayAudio.pause();
    nightAudio.play();
    nightAudio.currentTime = "20";
    currentImage = 1;
  } else {
    off.style.display = "block";
    btnOff.style.display = "block";
    body.style.backgroundColor = "black";
    on.style.display = "none";
    btnOn.style.display = "none";
    heading.style.display = "none";
    dayAudio.play();
    dayAudio.currentTime = "25";
    nightAudio.pause();
    currentImage = 0;
  }
}



























// if (body.style.backgroundColor === 'black') {
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
// } else {
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
// }

// switch topic
// let num = prompt('enter value')
// switch (num) {
//     case '5':
//        document.write('yes its number 5')

//         break;
//         case '4':
//             document.write('yes its number 4')
//             break;
//     default:
//         document.write('invalid number')

// }

// replace topic
//  let text = ('Hello World Hello World Hello World Hello World Hello World')
//  let text2 = text.replace(/World/g,'Pakistan')
//  document.write(text2)
