sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller,UIComponent) => {
    "use strict";

    var PageController = Controller.extend("curso.project1.controller.smartView3", {
        onInit() {
            console.log("Metadata loaded!");
        },
          onPrueba:function(){
            
          }
        });
    
        return PageController;
        
    });