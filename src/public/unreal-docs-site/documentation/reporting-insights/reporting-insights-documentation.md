# Reporting and Insights

## Project Insights

Project Insights automates your reporting of design project performance, enabling more informed and proactive decision making with regular access to analytics and trends. With insight into project performance drivers, you can identify problems sooner and more effectively monitor best practices to save time, reduce risk, and deliver high-quality designs.

The traditional process of manual, time-consuming reporting typically provides a narrow and backward-looking status snapshot. Project Insights’ automated reports and analytics enable you to harvest, combine, and analyze data about the evolving contents of your project’s connected data environment, as well as the status of design workflows. Project leaders, stakeholders, and participants will have access to dashboards with immediately actionable insights for improved project collaboration and efficiency.

Project Insights allows you to expose rich data in simple, always up-to-date dashboards. You can tailor these dashboards to fit your unique needs and deliver your specific insights to track and manage individual design disciplines and the overall design project.

### Power BI Connector

The Project Insights Connector uses the Project Insights API to retrieve data from Project Insights to construct dashboards.

1. Download the attached file from <a href="https://communities.bentley.com/products/projectwise/content_management/m/mediagallery/274664" target="_blank">Bentley Communities</a>.
2. Copy the downloaded .mez file to `%USERPROFILE%\Documents\Power BI Desktop\Custom Connectors`
3. Open PowerBI
4. Navigate to File -> Options and Settings -> Options -> Security -> Data Extensions and "Allow at extension without validation or warning". This is necessary to allow the external connector.
   <img src="/documentation/reporting-insights/untrusted.png" alt="Allow untrusted data sources" title="Allow untrusted data sources" style="width:100%"/>
5. Click on "Get Data"
6. Search for "Project Insights" in the top left corner. Find the connector at Online Services/Project Insights
   <img src="/documentation/reporting-insights/getdata.png" alt="Get Data" title="Get Data" style="width:100%"/>
7. Next, you need to select the projectId of the project you want to use the connector for.
    - For CONNECT projects:
        1. Navigate to your project in CONNECT
        2. Copy the projectId from the URL `https://connect.bentley.com/Project/Index?projectId={projectId}`
    - For ProjectWise 365 projects:
        1. Navigate to your project in ProjectWise 365
        2. Copy the projectId from the URL `https://projectwise365.bentley.com/{projectId}`
8. Find a report based on this connector as an example here: <a href="https://communities.bentley.com/products/projectwise/content_management/m/mediagallery/274669" target="_blank">https://communities.bentley.com/products/projectwise/content_management/m/mediagallery/274669</a>

## Design Insights

iTwin Design Insights gives project teams analytics visibility to understand the implications of design decisions on cost, schedule,
carbon footprint quantity take-off, safety, and other key performance indicators (KPIs) early in the project lifecycle. Design Insights
also tracks such KPIs historically as a project progresses. Analyzing this data as it changes over time using various dashboards provided
by Design Insights gives users the ability to identify hot-spots with the most changes over a specific time period and early indicators
of potential discipline clashes and project risks.

Design Insights offers an easy way to create business intelligence dashboards for digital twins using this data. It integrates with
Microsoft Power BI, offering an easy way to create personalized live dashboards. Design Insights auto generates design phase quantity-takeoff
and allows a user to configure the calculation logic for various key performance indicators.

### Using this data in your own Reports and Sites

The easiest way to get started with APIs from iTwin Design Insights is from the Design Insights website itself. On each iTwin Design Insights
dashboard, you will find an API icon (`</>`).

<img src="/documentation/reporting-insights/insights-design.button-location.png" alt="APIs used on this page" title="APIs used on this page" style="width:100%"/>

Clicking on the API icon will present you with a list of APIs that are used to generate the iTwin Design Insights page you are currently
visiting. You may find that the icon is missing on some pages. As we expand our set of available APIs, we will enable the API icon on more
iTwin Design Insights pages.

<img src="/documentation/reporting-insights/insights-design.modal-preview.png" alt="List of APIs" title="List of APIs" style="width:100%"/>

This list is also subject to change as our API offerings evolve. Finally, given you have the necessary authorization (detailed in endpoint
documentation), the provided links can be used in reporting software such as Power BI, or even used to build your own websites.

_Optionally_, it is also possible to build these links manually. The parameters for each endpoint are described in the detailed documentation.

### What if I don't have access to iTwin Design Insights?

Please contact your account manager for access.
