## iTwin Validation API
iTwin Validation API checks the completeness and quality of the digital twin in support of one or more information exchange workflows. In general terms, this involves checking to see if the engineering data in the digital twin meet the information requirements of the consuming application or user in the workflow. iTwin Validation API includes three main components: rules, tests, and results and the ability to manage them.

### Validation Rules
Rules can check individual properties of elements in the digital twin to ensure the values meet the criteria of being set, being unique, falling within a certain range, or matching a specific pattern. For example, to successfully generate carbon footprint reports, all doors in the digital twin must have material and quantity take-off information assigned to them. 

### Validation Tests
Property tests allow rules to be grouped into logical sets to execute together. For example, all rules for material and quantity take-off rules set up for multiple design elements (doors, windows, beams, columns, slabs, etc.) can be grouped in a logical set called ‘Carbon Footprint Data Check.’

### Validation Results
Results are provided for each type of test. They contain any elements whose properties do not meet the criteria specified by the rules.

### Typical Validation Workflow
The process for validating iModels consists of the following steps:
- Define one or more rules that specify an iModel item property requirement.
- Define a test and then add rules to it.
- Run a test for a specific iModel and version that you want to validate.
- Retrieve the results and identify the failures.

