sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    var PageController = Controller.extend("curso.project1.controller.DetalleView", {
        onInit() {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetalleView").attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function(oEvent) {
            const iProductId = oEvent.getParameter("arguments").productId;
            const oView = this.getView();
            oView.bindElement({
                path: "/Products(" + iProductId + ")",
                events: {
                    dataRequested: function() {
                        oView.setBusy(true);
                    },
                    dataReceived: function() {
                        oView.setBusy(false);
                    }
                }
            });
        }

        });
    
        return PageController;
        
    });