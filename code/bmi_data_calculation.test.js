const bmi_data_calculator=require("./bmi_data_calculation");
describe("RUNNING TESTS",()=>
{
test('Empty value of height should give error',()=>
{
var result=bmi_data_calculator.validate_input_data({'Gender': 'Male', 'HeightCm':"", 'WeightKg': 96});
expect(result).toBe(false);
});
});