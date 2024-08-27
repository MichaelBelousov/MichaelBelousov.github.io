## Carbon Calculation

Our Carbon Calculation APIs provide integrations for your digital twins into various software tools (provided by third-parties and Bentley systems) to assist with environmental impact calculations such as Life Cycle Assessments or Embodied Carbon estimations.

### One Click LCA

[One Click LCA](https://www.oneclicklca.com) is a third-party construction LCA and EPD software company. Bentley's iTwin Platform integration with One Click LCA allows you to take Quantity Takeoff Reports created using the iTwin Reporting Platform and export them to One Click LCA for convenient Life Cycle Analysis. iTwin Platform enables the incorporation of engineering data created by diverse design tools. A summary of the design data is exported through this integration, allowing you to gain insights into the environmental impacts of your infrastructure project.

Please note that an account with One Click LCA is required to take advantage of this integration.

First you will need a Report. See [iTwin Reporting Platform documentation](https://developer.bentley.com/apis/insights) for guidance on creating a Report. The Report and associated Mapping should contain all the elements and required properties One Click LCA's Life Cycle Analysis.

When ready with the Report, acquire an access token from One Click LCA using their APIs. Contact api@oneclicklca.com for guidance on the One Click LCA API.

Finally, [export your Report](https://developer.bentley.com/apis/carbon-calculation/operations/create-oneclicklca-job/) to One Click LCA. This may take some time. [An endpoint](https://developer.bentley.com/apis/carbon-calculation/operations/get-oneclicklca-job-status/) is provided to monitor export progress.

Once the export is complete, return to the One Click LCA portal to view results.

### And More...

One Click LCA is just the first of several planned integrations for Carbon Calculations with your digital twins. Stay tuned for more.
