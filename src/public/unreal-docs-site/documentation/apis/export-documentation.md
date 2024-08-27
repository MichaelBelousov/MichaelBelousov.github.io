## Export

The Export API provides the ability to export engineering data from an iModel to different standard formats like 'IFC' or 'LandXML'. With this API, you can start exporting from an iModel and with a job run, the output file will be stored against the projectId provided. To get the file generated use Storage API.

The API supports following export types:

- IFC (IFC versions supported - 'IFC4.3 RC1', 'IFC2x3', 'IFC2x3 CV 2.0', 'IFC4 RV 1.2').
- LandXML.

### Authorization

The export process usually takes time and is performed in the background. For that, we need to store the user's refresh token. You can get it by using [Get Authorization Information API](/apis/export/operations/get-authorization-information/). This API will return the current status and a redirect URL if the token has to be renewed.