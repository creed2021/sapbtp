sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("curso.project1.controller.SuppliersView", {
        onInit() {

            this.getView().byId("smartFilterBar2").fireInitialise();
            var oJM = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJM.loadData("../model/paises.json");
            oView.setModel(oJM,"combo");

        }
    });
});