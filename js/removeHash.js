$(document).ready(function() {
        const menuBtn = $('.hashremove');
      menuBtn.click(()=>{
        setTimeout(()=>{
            removeHash();
        }, 1);
      });
        function removeHash(){
            history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }
    });