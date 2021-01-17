$(document).ready(function () {
    jQuery("#section-hero h1").fitText(1.2, { minFontSize: '10px', maxFontSize: '80px' } );
    jQuery("#section-hero p").fitText(1.2, { minFontSize: '8px', maxFontSize: '40px' } ); 


    function adaptContent() {
        // Adapt title size
        jQuery("#section-hero h1").fitText(1.2, { minFontSize: '10px', maxFontSize: '80px' } );
        jQuery("#section-hero p").fitText(1.2, { minFontSize: '8px', maxFontSize: '40px' } ); 
        
    }

    // Attaching the event listener function to window's resize event
    window.addEventListener("resize", adaptContent);

});
