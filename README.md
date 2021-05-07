# BMICalculator
## Problem Statement

To build a Nodejs BMI Calculator

## Features

1. JSON DATA-[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female","HeightCm": 167, "WeightKg": 82} has been provided as input in properties.js file
2. First GET API (/Get_BMI_DATA) runs on above mentioned JSON Data and calculates BMI index, BMI Category (Underweight,Normal weight,Overweight,Moderately obese,Severely obese,Very
severely obese) and Health Risk category (Malnutrition risk,Low risk,Enhanced risk,Medium risk High risk,Very high risk)
3. Second api (/COUNT_OVERWEIGHT_PEOPLE) counts the number of overweight people according to the BMI category calculated in step 1. If we run this API first without running the Get_BMI_DATA  API, it throws an error.
4. All the appropriate test cases have been written using jest to test that the APIs are working correctly.
## Serving Code

Step 1: Install npm packages

```
npm i
npm test`
```

Step 2: Start backend with `node index.js`

The backend is served at http://localhost:3000
