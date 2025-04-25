sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    var PageController = Controller.extend("curso.project1.controller.ProductsView", {
        onInit() {
        },
            pressOnTileOne : function(evt) {
                MessageToast.show("The generic tile one pressed.");
            }
        });
    
        return PageController;
        
    });