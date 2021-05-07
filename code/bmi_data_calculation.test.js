const bmi_data_calculator=require("./bmi_data_calculation");
describe("Running test for data validator function",()=>
{
test('Empty value of height value should give error and return false',()=>
{
var result=bmi_data_calculator.validate_input_data({'Gender': 'Male', 'HeightCm':"", 'WeightKg': 96});
expect(result).toBe(false);
});
test('Empty value of weight value should give error and return false',()=>
{
var result=bmi_data_calculator.validate_input_data({'Gender': 'Male', 'HeightCm':176, 'WeightKg': ""});
expect(result).toBe(false);
});
test('Empty value of Gender value should give error and return false',()=>
{
var result=bmi_data_calculator.validate_input_data({'Gender': '', 'HeightCm':176, 'WeightKg':96});
expect(result).toBe(false);
});
test('Height value less then 40 cm should given an error and return false',()=>
{
var result=bmi_data_calculator.validate_input_data({'Gender': 'Male', 'HeightCm':38, 'WeightKg':96});
expect(result).toBe(false);
});
test('Weight value less then 2 kg should given an error and return false',()=>
{
var result=bmi_data_calculator.validate_input_data({'Gender': 'Male', 'HeightCm':170, 'WeightKg':1});
expect(result).toBe(false);
});

describe("Running tests for BMI index calculation",()=>
{
    test('Calculating if correct BMI is been calculated',()=>
    {
    var result=bmi_data_calculator.bmi_index_calculator(1.75,75);
    expect(result).toBe("24.49");
    });
    test('Calculating if correct BMI is been calculated',()=>
    {
    var result=bmi_data_calculator.bmi_index_calculator(1.95,50);
    expect(result).toBe("13.15");
    });
    });
});
describe("Running tests for BMI category",()=>
{
    test('Checking if correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(16.5);
    expect(result).toBe("Under Weight");
    });
    test('Checking if correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(24.15);
    expect(result).toBe("Normal Weight");
    });
    test('Checking if correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(27.18);
    expect(result).toBe("Overweight");
    });
    test('Checking if correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(32.19);
    expect(result).toBe("Moderately obese");
    });
    test('Checking if correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(38.17);
    expect(result).toBe("Severely obese");
    });
    test('Checking if correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(43.02);
    expect(result).toBe("Very Severely obese");
    });
    test('Checking if boundary condition correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(18.4);
    expect(result).toBe("Under Weight");
    });
    test('Checking if boundary condition correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(18.5);
    expect(result).toBe("Normal Weight");
    });
    test('Checking if boundary condition correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(30);
    expect(result).toBe("Moderately obese");
    });
    test('Checking if boundary condition correct BMI category is returned',()=>
    {
    var result=bmi_data_calculator.bmi_category(35);
    expect(result).toBe("Severely obese");
    });
});
describe("Running tests for Health risk category function",()=>
{
    test('Checking if correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(16.5);
    expect(result).toBe("Malnutrition risk");
    });
    test('Checking if correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(24.15);
    expect(result).toBe("Low risk");
    });
    test('Checking if correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(27.18);
    expect(result).toBe("Enhanced risk");
    });
    test('Checking if correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(32.19);
    expect(result).toBe("Medium risk");
    });
    test('Checking if correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(38.17);
    expect(result).toBe("High risk");
    });
    test('Checking if correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(43.02);
    expect(result).toBe("Very high risk");
    });
    test('Checking if boundary condition correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(18.4);
    expect(result).toBe("Malnutrition risk");
    });
    test('Checking if boundary condition correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(18.5);
    expect(result).toBe("Low risk");
    });
    test('Checking if boundary condition correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(30);
    expect(result).toBe("Medium risk");
    });
    test('Checking if boundary condition correct Health risk category is returned',()=>
    {
    var result=bmi_data_calculator.health_risk_category(35);
    expect(result).toBe("High risk");
    });
});
describe("Running tests for Health risk category function",()=>
{
    test("Checking the result when bmi data hasn't been calculated and the table columns haven't been updated",()=>
    {
    var result=bmi_data_calculator.count_overweight_people([{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
    85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
    "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
    "HeightCm": 167, "WeightKg": 82}]);
    expect(result).toBe(-1);
    });   
    test("Checking the result when bmi data has been calculated and the table columns have been updated",()=>
    {
    var result=bmi_data_calculator.count_overweight_people([{"Gender":"Male","HeightCm":171,"WeightKg":96,"bmi_index":"32.83","bmi_category":"Moderately obese","health_risk":"Medium risk"},
    {"Gender":"Male","HeightCm":161,"WeightKg":85,"bmi_index":"32.79","bmi_category":"Moderately obese","health_risk":"Medium risk"},
    {"Gender":"Male","HeightCm":180,"WeightKg":77,"bmi_index":"23.77","bmi_category":"Normal Weight","health_risk":"Low risk"},
    {"Gender":"Female","HeightCm":166,"WeightKg":62,"bmi_index":"22.50","bmi_category":"Normal Weight","health_risk":"Low risk"},
    {"Gender":"Female","HeightCm":150,"WeightKg":70,"bmi_index":"31.11","bmi_category":"Moderately obese","health_risk":"Medium risk"},
    {"Gender":"Female","HeightCm":167,"WeightKg":82,"bmi_index":"29.40","bmi_category":"Overweight","health_risk":"Enhanced risk"}]);
    expect(result).toBe(1);
    });
    test("Checking the result when bmi data has been calculated and the table columns have been updated",()=>
    {
    var result=bmi_data_calculator.count_overweight_people([{"Gender":"Male","HeightCm":168,"WeightKg":84,"bmi_index":"29.76","bmi_category":"Overweight","health_risk":"Enhanced risk"},
    {"Gender":"Male","HeightCm":161,"WeightKg":85,"bmi_index":"32.79","bmi_category":"Moderately obese","health_risk":"Medium risk"},
    {"Gender":"Male","HeightCm":180,"WeightKg":77,"bmi_index":"23.77","bmi_category":"Normal Weight","health_risk":"Low risk"},
    {"Gender":"Female","HeightCm":166,"WeightKg":62,"bmi_index":"22.50","bmi_category":"Normal Weight","health_risk":"Low risk"},
    {"Gender":"Female","HeightCm":150,"WeightKg":70,"bmi_index":"31.11","bmi_category":"Moderately obese","health_risk":"Medium risk"},
    {"Gender":"Female","HeightCm":167,"WeightKg":82,"bmi_index":"29.40","bmi_category":"Overweight","health_risk":"Enhanced risk"}]);
    expect(result).toBe(2);
    }); 
});