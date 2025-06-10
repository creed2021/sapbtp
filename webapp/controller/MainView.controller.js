sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
], (Controller,UIComponent,Filter,FilterOperator,MessageToast) => {
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

            MessageToast.show("Invoices");
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

            const oDAta = this.getView().getModel("combo").getData();
            let filters = [];

            if (oDAta.ShipName !== "") {
                filters.push(new Filter("ShipName",FilterOperator.Contains,oDAta.ShipName));
            }
            if (oDAta.CountryKey !== "") {
                filters.push(new Filter("Country",FilterOperator.EQ,oDAta.CountryKey));
            }

            const oList = this.getView().byId("lista");
            const oBinding = oList.getBinding("items");
            oBinding.filter(filters);

        },
        onLimpiar:function(){
            const Omodelstring = this.getView().getModel("combo");
            Omodelstring.setProperty("/ShipName","");
            Omodelstring.setProperty("/CountryKey","");

            const oList = this.getView().byId("lista");
            const oBinding = oList.getBinding("items");
            oBinding.filter([]);
        },
        onOrders:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteOrdersView");
        },
        onFormulario:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteFormularioView");
        },
        onProducts2:function(){

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteProducts2View");

        },
        onHumito:function(){
            
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteHumitoView");

        }
    });
});