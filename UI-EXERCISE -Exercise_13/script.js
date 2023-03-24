import data  from './friends.json' assert { type: 'json' };;
console.log(data);
// card row starts
let card = '<div class="card-row">';
// loop to add dynamically card details
for (let temp of data)
{
    card  +='<div class="card">'+ '<div class="img-container">'+
             '<img src = '+temp.img+' /></div> '+
            ' <div class="name-container">'+
             ' <p>'+temp.first_name+'  '   +temp.last_name+'</p>'+
              '<p>'+temp.email+'</p>'+
          '</div></div>'
}
card += '</div>'
// card end
let container = document.querySelector(".card-container");
// adding as innerhtml for card container
container.innerHTML=card;