sap.ui.define([
     "./Base.controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], (BaseController,JSONModel,MessageToast) => {
    "use strict";

    var PageController = BaseController.extend("curso.project1.controller.FormularioView", {
        onInit() {
            this.onloadModel();
        },

        onloadModel:function(){
            let oData= {
                IDEmpleado:  "",
                Nombre: "",
                Apellido: "",
                Fecha_Ingreso: "",
                Sueldo: 0.00
            }
            this.getView().setModel(new JSONModel(oData),"form");
            
        },

        onGuardar:function(){
            if (this.validaciones){
                return;
            }
            let oModel = this.getView().getModel("form");
            let sUrl="https://d5ead838trial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sapui5";
            let SToken ="eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vZDVlYWQ4Mzh0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktNjg2ODIzYTVlZiIsInR5cCI6IkpXVCIsImppZCI6ICJ6dkFMejduNDVZL0NhQU5Xc2RMelVCM3A5SkxMdFFnUjVHU1RZTk1vTnYwPSJ9.eyJqdGkiOiIxYjI2ZmFjODM0YWY0NTU3OGRlOGMzMjhjNzIwMjFjZSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJlNDAxOWVmMi05NmY0LTQxYmMtYWU5Zi1hZDE2OWE0OTY2MGQiLCJ6ZG4iOiJkNWVhZDgzOHRyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiJhODBlOTNjZi01MTYzLTQ0NWEtYjZjYi02YTk1ZDUwMGUwNzQifSwic3ViIjoic2ItYTgwZTkzY2YtNTE2My00NDVhLWI2Y2ItNmE5NWQ1MDBlMDc0IWI0Mzg1NDB8aXQtcnQtZDVlYWQ4Mzh0cmlhbCFiNTUyMTUiLCJhdXRob3JpdGllcyI6WyJ1YWEucmVzb3VyY2UiLCJpdC1ydC1kNWVhZDgzOHRyaWFsIWI1NTIxNS5FU0JNZXNzYWdpbmcuc2VuZCJdLCJzY29wZSI6WyJ1YWEucmVzb3VyY2UiLCJpdC1ydC1kNWVhZDgzOHRyaWFsIWI1NTIxNS5FU0JNZXNzYWdpbmcuc2VuZCJdLCJjbGllbnRfaWQiOiJzYi1hODBlOTNjZi01MTYzLTQ0NWEtYjZjYi02YTk1ZDUwMGUwNzQhYjQzODU0MHxpdC1ydC1kNWVhZDgzOHRyaWFsIWI1NTIxNSIsImNpZCI6InNiLWE4MGU5M2NmLTUxNjMtNDQ1YS1iNmNiLTZhOTVkNTAwZTA3NCFiNDM4NTQwfGl0LXJ0LWQ1ZWFkODM4dHJpYWwhYjU1MjE1IiwiYXpwIjoic2ItYTgwZTkzY2YtNTE2My00NDVhLWI2Y2ItNmE5NWQ1MDBlMDc0IWI0Mzg1NDB8aXQtcnQtZDVlYWQ4Mzh0cmlhbCFiNTUyMTUiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjcyODI3MzNmIiwiaWF0IjoxNzQ2NjI4OTExLCJleHAiOjE3NDY2MzI1MTEsImlzcyI6Imh0dHBzOi8vZDVlYWQ4Mzh0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiZTQwMTllZjItOTZmNC00MWJjLWFlOWYtYWQxNjlhNDk2NjBkIiwiYXVkIjpbInNiLWE4MGU5M2NmLTUxNjMtNDQ1YS1iNmNiLTZhOTVkNTAwZTA3NCFiNDM4NTQwfGl0LXJ0LWQ1ZWFkODM4dHJpYWwhYjU1MjE1IiwidWFhIiwiaXQtcnQtZDVlYWQ4Mzh0cmlhbCFiNTUyMTUuRVNCTWVzc2FnaW5nIl19.CUJBC88u19PQb2YGUHTc06odmCe5Nq5e48T0eECyaYqoddBBYmehwtWY3VttU7eYKZcMxb8AaiYgJG4vygOvvJNy1-DJ6D1IedzMCtlG6OtcqTbGhkvog_cDRv0MnpbJ9OHX5PJvPsmYy7LTyySgNIR8HtZlLYMu8rEzkBTYO7rB6qipPyVdjArWOU3mb5eEwsMTWWNHHCyoifslfAGjLAOUBPbtPZjMIWWjWsZi9hZOSImoq2g8BSvaR-r8Osrbx4IH9ryP1NJtLBHWo-cgQygXXmOcteL0Dxv8MIjPs8YvUShQRzPPZpp2eKCzv3wNzVMB1HgWiaP6kY6b4jgbig";
            let oData = {
                    "Records": {
                        "Statement": {
                            "Employees": {
                                "@action": "INSERT",
                                "table": "DBADMIN.EMPLEADOS",
                                "access": {
                                    "ID_EMPLEADO": oModel.getProperty("/IDEmpleado"),
                                    "NOMBRE": oModel.getProperty("/Nombre"),
                                    "APELLIDO": oModel.getProperty("/Apellido"),
                                    "FECHA_INGRESO": "2025-06-01",
                                    "SUELDO": oModel.getProperty("/Sueldo")
                                }
                            }
                        }
                    }
            };

            $.ajax({
                url:sUrl,
                data:JSON.stringify(oData),
                Headers:{
                    "Content-Type":"application/json",
                    "Authorization": "Bearer " + SToken,
                    "Body": JSON.stringify(oData)
                },
                username:"sb-a80e93cf-5163-445a-b6cb-6a95d500e074!b438540|it-rt-d5ead838trial!b55215",
                password:"00ab0540-cee8-4255-b3cb-f6564e341716$9478Mt9bHbVzFfIQ7XV8S7u3tboTlKkIvZ3LlOpm9sU="

            }).done((data)=>{
                console.log(data);
                sap.m.MessageToast.show("Datos Cargados con Exito");
            }).error((err)=>{
                console.log(err);
            });
        },
        onCancelar:function(){

            //let oModel = this.getView().getModel("form");
            //oModel.setProperty("/IDEmpleado","");
            //oModel.setProperty("/Nombre","");
            //oModel.setProperty("/Apellido","");
            //oModel.setProperty("/Sueldo","");
           let sueldo = this.ObtenerId("txtSueldo").getValue();
           MessageToast.show(sueldo);

           this.getView().byId("txtIDEmpleado").setValue("");
           this.getView().byId("txtNombre").setValue("");
           this.getView().byId("txtApellido").setValue("");
           this.getView().byId("txtSueldo").setValue("");

        },

        onValidar:function(){

            this.getView().byId("txtSueldo").setValueState(sap.ui.core.ValueState.None);
            this.getView().byId("txtNombre").setValueState(sap.ui.core.ValueState.None);
            this.getView().byId("txtApellido").setValueState(sap.ui.core.ValueState.None);
            this.getView().byId("txtIDEmpleado").setValueState(sap.ui.core.ValueState.None);

            this.validaciones();
        },

        ObtenerId:function(texto){

            return this.getView().byId(texto);

        },

        validaciones:function(){

            var aForm = ["Formulario"];
            var validate = [];
            aForm.forEach(lform => {
                var item = this.getView().byId(lform).getFormContainers()[0].getFormElements();
                item.forEach(oitem => {
                    var field = oitem.getFields();
                    field.forEach(cfield => {
                        if (cfield.getValue){
                         var campo = cfield.getId().split("FormularioView--")[1];
                         var validar = cfield.getValue() !== "" ? false : true;
                         if (validar){
                            validate.push({idfield:campo,state:validar});
                            this.getView().byId(campo).setValueState("Error");

                         }
                        } 

                    });
                });
            });
            return validate.length;
        },
        onCambio:function(oEvent){
            var cambio = oEvent.getSource().getValue();
            if (cambio){
                oEvent.getSource().setValueState("None");
            }

        }

        });
    
        return PageController;
        
    });