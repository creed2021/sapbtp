sap.ui.define([
    "./Base.controller"
], (BaseController) => {
    "use strict";

    return BaseController.extend("curso.project1.controller.OrdersView", {
        onInit() {

            this.getView().byId("smartFilterBar3").fireInitialise();
            var oJM = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJM.loadData("../model/paises.json");
            oView.setModel(oJM,"combo");

        }
    });
});