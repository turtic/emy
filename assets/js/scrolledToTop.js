// $(document).ready(function(){

//     function changeLink(oldHtml, newHTML) {
//         var oldPath = window.location.pathname;
//         var newPath;
      
//         if (oldPath.indexOf(oldHtml)) {
//           newPath = oldPath.replace(oldHtml, newHTML);
//         } else {
//           newPath = oldPath + newHTML;
//         }
//         return newPath;
//       }

//     $(window).scroll(function (event) {
        
//         var scrollValue = $(window).scrollTop();

//         if (scrollValue === 0) {

//             window.location.pathname = changeLink("main.html", "index.html");
//             console.log('top');
            
//         }
//     });

// })