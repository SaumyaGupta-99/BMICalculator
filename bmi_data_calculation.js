export const bmi_category=function (bmi_index){  
  if(bmi_index<18.5)
  return "Under Weight";
  else if(bmi_index>=18.5 && bmi_index<25)
  return "Normal Weight";
  else if(bmi_index>=25 && bmi_index<30)
  return "Overweight";
  else if(bmi_index>=30 && bmi_index<35)
  return "Moderately obese obese";
  else if(bmi_index>=35 && bmi_index<40)
  return "Severely obese";
  else
  return "Very Severely obese";
  };
 export const health_risk_category=function(bmi_index){  
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
    };
export const bmi_index_calculator=function (height,weight){
return (weight/(height*height));
};
