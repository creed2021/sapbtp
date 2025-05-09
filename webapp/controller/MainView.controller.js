sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller,UIComponent) => {
    "use strict";

    return Controller.extend("curso.project1.controller.MainView", {
        onInit() {

            var oJM = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJM.loadData("../model/paises.json");
            oView.setModel(oJM,"combo");

        },
        onProducts:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteProductsView");
        },
        onInvoices:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteInvoicesView");
        },

        onCustomers:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteEmpleadosView");

        },
        onSuppliers:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteSuppliersView");

        },
        onFilter:function(){

            const oData = this.getView().getModel("").getData();


        },

        onLimpiar:function(){


        }
    });
});