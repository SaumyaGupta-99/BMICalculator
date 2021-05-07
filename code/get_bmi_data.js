import bmi_data_calculator from "./bmi_data_calculation";
import properties from "../properties";
const patients_data=properties.input;
const bmi_calculator={  
    init: (router) => {
        const baseUrl = `${properties.api}/`;
        router.get(
          baseUrl + "Get_BMI_DATA",
          bmi_calculator.get
        );
        router.get(
            baseUrl + "COUNT_OVERWEIGHT_PEOPLE",
            bmi_calculator.count
          );
    },
    get: async (req, res) => {
        try{
        for(var i=0;i<patients_data.length;i++){
            if(bmi_data_calculator.validate_input_data(patients_data[i])){
                var height=patients_data[i]["HeightCm"]/100;
                var BMI_index=bmi_data_calculator.bmi_index_calculator(height,patients_data[i]["WeightKg"]);
                var BMI_category=bmi_data_calculator.bmi_category(BMI_index);
                var Health_risk=bmi_data_calculator.health_risk_category(BMI_index);
                patients_data[i]["bmi_index"]=BMI_index;
                patients_data[i]["bmi_category"]=BMI_category;
                patients_data[i]["health_risk"]=Health_risk;
            }
            else{
                patients_data[i]["bmi_index"]="";
                patients_data[i]["bmi_category"]="";
                patients_data[i]["health_risk"]="";
            }
        } 
        res.json(patients_data);
    }
    catch (err) {
        res.status(err);
      }
    },
    count:async (req, res) =>{
        try{
         var result =bmi_data_calculator.count_overweight_people(patients_data);
         if(result==-1){
         res.json("BMI Data has not been calculated yet. First Calculate BMI Data");
         }
         else{
         res.json(result);
         }
    }
    catch (err) {
        res.status(err);
      }
    }
};
export default bmi_calculator;