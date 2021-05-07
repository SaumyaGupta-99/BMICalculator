import {bmi_category,health_risk_category,bmi_index_calculator} from "./bmi_data_calculation.js";
import properties from "./properties";
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
        const patients_data=properties.input;
        for(var i=0;i<patients_data.length;i++){
         //Assuming Minimum height and weight of a person posible is 45 cm and 2 kg
            if(patients_data[i]["HeightCm"]==""|| patients_data[i]["WeightKg"]=="" || patients_data[i]["HeightCm"]<=40 || patients_data[i]["WeightKg"]<=2){
            console.log("Incorrect data encountered at position"+(i+1));
            patients_data[i]["bmi_index"]="";
            patients_data[i]["bmi_category"]="";
            patients_data[i]["health_risk"]="";
            }
            else{
            var height=patients_data[i]["HeightCm"]/100;
            var BMI_index=bmi_index_calculator(height,patients_data[i]["WeightKg"]);
            BMI_index=BMI_index.toFixed(2);
            var BMI_category=bmi_category(BMI_index);
            var Health_risk=health_risk_category(BMI_index);
            patients_data[i]["bmi_index"]=BMI_index;
            patients_data[i]["bmi_category"]=BMI_category;
            patients_data[i]["health_risk"]=Health_risk;
            }
        } 
        properties.input=patients_data;
        res.json(patients_data);
    }
    catch (err) {
        res.status(err);
      }
    },
    count:async (req, res) =>{
        try{
        const patients_data=properties.input;
        if(patients_data.length==0)
        res.json(0);
        else{
            if(!("bmi_index" in patients_data[0]))
            res.json("BMI Data has not been calculated yet. First Calculate BMI Data");
            else
            {
                var count=0;
                for(var i=0;i<patients_data.length;i++){
                if(patients_data[i]["bmi_category"]=="Overweight")
                count+=1;
                }  
                res.json(count);
            }
        }
    }
    catch (err) {
        res.status(err);
      }
    }
};
export default bmi_calculator;