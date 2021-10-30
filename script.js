console.log("MV Enhanced Forum! by HunkStalker");

var botones = document.querySelectorAll('a.post-btn.btnrep');
var toxicUser = document.querySelectorAll('div.moderated-group');

var usuarios = [];
var eliminarPost = true;

for (var post of toxicUser) {
    post.remove();
}

function getEventType(event) {
    document.querySelectorAll('img[alt*='+ usuarios[0] + ']').src = img.src.replace("");
    if(eliminarPost) eliminarRespuestaUsuario(event);
}

for (var btns of botones) {
    //btns.click();
    btns.addEventListener('click', getEventType, true);
}

function eliminarRespuestaUsuario(element) {
    element.querySelectorAll('.replies').remove();
}

function cambiarAvatar() {
    
}

function cambiarNombreUsuario() {
    
}

function cambiarNumRespuestas() {

}


// $.each(buttons, function(index, btn) {

//     btn.click(function(e) {
        
//         alert("Botón pulsado!");
//         var idClicked = e.target.id;
//     });

// });





// function createCookie(){
//     //This is not production quality, its just demo code.
//     var cookieList = function(cookieName) {
//         //When the cookie is saved the items will be a comma seperated string
//         //So we will split the cookie by comma to get the original array
//         var cookie = $.cookie(cookieName);
//         //Load the items or a new array if null.
//         var items = cookie ? cookie.split(/,/) : new Array();
        
//         //Return a object that we can use to access the array.
//         //while hiding direct access to the declared items array
//         //this is called closures see http://www.jibbering.com/faq/faq_notes/closures.html
//         return {
//             "add": function(val) {
//                 //Add to the items.
//                 items.push(val);
//                 //Save the items to a cookie.
//                 //EDIT: Modified from linked answer by Nick see 
//                 //      http://stackoverflow.com/questions/3387251/how-to-store-array-in-jquery-cookie
//                 $.cookie(cookieName, items.join(','));
//             },
//             "remove": function (val) { 
//                 //EDIT: Thx to Assef and luke for remove.
//                 indx = items.indexOf(val); 
//                 if(indx!=-1) items.splice(indx, 1); 
//                 $.cookie(cookieName, items.join(','));        },
//             "clear": function() {
//                 items = null;
//                 //clear the cookie.
//                 $.cookie(cookieName, null);
//             },
//             "items": function() {
//                 //Get all the items.
//                 return items;
//             }
//         }
//     }  
// }

// $('a.post-btn.btnrep').click();

// cadena = $('a.post-btn.btnrep').eq(idClicked[0]).text();

// idClicked;

// function eliminarRespuesta() {
//   var num;

//   $('a.post-btn.btnrep').text('respuesta' + );

//   $.each(['RedNebula'], function(index, nick) {
//     $('a.autor[href=' + nick + ']').parents().remove();
//     $('a.autor[href=' + nick + ']').on('DOMNodeRemoved', function(e) {

//     });
//   });
//   $('a.post-btn.btnrep').click();
// }
// eliminarRespuesta();



// var buttons = [];
// $('a.post-btn.btnrep').each(function(index) {
//   buttons[index] = $(this);

//   buttons[index].click(function(e) {
//     var idClicked = e.target.id;
//   });
// });



// var textButtons = [];
// $('a.post-btn.btnrep').each(function(index) {
//   textButtons[index] = $(this).text();
// });

// function numRespuestas(contador) {
//   if (contador > 1) arrayButtons = contador + ' respuestas ';
//   else arrayButtons = contador + ' respuesta ';
// }



// pic = document.querySelectorAll('img[alt*="RedNebula"]');
// pic.src="https://cdn2.thecatapi.com/images/5ei.gif";