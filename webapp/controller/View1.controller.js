sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui53.controller.View1", {
        onInit:function() {
        },
        onclick:function(){            
            alert("you have been alerted");
        }
        
    });
});