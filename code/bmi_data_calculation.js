const bmi_data_calculator={
validate_input_data:function(patient_data){
  if(patient_data["HeightCm"]=="" || patient_data["WeightKg"]=="" || patient_data["Gender"]=="")
  {
    console.log("Missing Data encountered");
    return false;
  }
  //Assuming Minimum height and weight of a person posible is 45 cm and 2 kg
  else if(patient_data["HeightCm"]<=40 || patient_data["WeightKg"]<=2){
    console.log("Incorrect data encountered at position");
    return false;
    }
   else
    return true;
},

bmi_category:function (bmi_index){  
  if(bmi_index<18.5)
  return "Under Weight";
  else if(bmi_index>=18.5 && bmi_index<25)
  return "Normal Weight";
  else if(bmi_index>=25 && bmi_index<30)
  return "Overweight";
  else if(bmi_index>=30 && bmi_index<35)
  return "Moderately obese";
  else if(bmi_index>=35 && bmi_index<40)
  return "Severely obese";
  else
  return "Very Severely obese";
  },
 health_risk_category:function(bmi_index){  
    if(bmi_index<18.5)
    return "Malnutrition risk";
    else if(bmi_index>=18.5 && bmi_index<25)
    return "Low risk";
    else if(bmi_index>=25 && bmi_index<30)
    return "Enhanced risk";
    else if(bmi_index>=30 && bmi_index<35)
    return "Medium risk";
    else if(bmi_index>=35 && bmi_index<40)
    return "High risk";
    else
    return "Very high risk";
    },
bmi_index_calculator:function (height,weight){
var BMI_index=(weight/(height*height));
BMI_index=BMI_index.toFixed(2);
return BMI_index;
},
count_overweight_people:function (patients_data){
  if(patients_data.length==0)
  return(0);
  else{
      if(!("bmi_index" in patients_data[0])){
      return (-1);
      }
      else
      {
          var count=0;
          for(var i=0;i<patients_data.length;i++){
          if(patients_data[i]["bmi_category"]=="Overweight")
          count+=1;
          } 
          return (count); 
      }
  }
  }
}
module.exports=bmi_data_calculator;