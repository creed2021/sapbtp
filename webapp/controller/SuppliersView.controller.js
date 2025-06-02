sap.ui.define([
    "./Base.controller",
    "sap/m/MessageToast"
], (BaseController,MessageToast) => {
    "use strict";

    return BaseController.extend("curso.project1.controller.SuppliersView", {
        onInit() {

            this.getView().byId("smartFilterBar2").fireInitialise();
            var oJM = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJM.loadData("../model/paises.json");
            oView.setModel(oJM,"combo");

        },
        onPrueba:function(){

            MessageToast.show("anda");

        }
    });
});