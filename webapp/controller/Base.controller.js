sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Core",
    "sap/m/MessageToast"
],function (Controller,Core,MessageToast) {
    "use strict";

    return Controller.extend("curso.project1.controller.Base", {
        
        onTheme:function(oEvent){
            var oTheme = oEvent.getSource().data("tipoTema");
            if (oTheme=="L"){
                Core.applyTheme("sap_horizon");
            } else{
                Core.applyTheme("sap_horizon_dark");
            }
        },
        onMessage:function(){

            MessageToast.show("prueba fragment");

        }

    });

});