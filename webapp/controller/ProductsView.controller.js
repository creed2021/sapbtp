sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller,UIComponent) => {
    "use strict";

    var PageController = Controller.extend("curso.project1.controller.ProductsView", {
        onInit() {
        },
            pressOnTileOne : function(oEvent) {
                //MessageToast.show("The generic tile one pressed.");
                const oRouter = UIComponent.getRouterFor(this);
				const selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
				oRouter.navTo("RouteDetalleView", {
					productId: selectedProductId
				});
            }
        });
    
        return PageController;
        
    });