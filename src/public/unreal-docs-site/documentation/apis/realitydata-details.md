# RealityData Properties

This page describes the RealityData properties in detail. Below is a list of properties, their type, along with their description. More so, some properties below have additional information about them.

RealityData must use the required properties listed below.

- `displayName`
- `classification`
- `type`

| Property             | Type          | Required?                           | Read-only? | Description                                                                                                                                                                                                                                                                      |
| :------------------- | :------------ | :---------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                   | string (guid) | Generated                           | Read-only  | Guid Identifier of the Reality Data. This identifier is assigned by the service at the creation of the reality data. It is also unique.                                                                                                                                          |
| displayName          | string        | Required                            | Modifiable | The name of the Reality Data. This property may not contain any control sequence such as a URL or code.                                                                                                                                                                          |
| dataset              | string        | Optional                            | Modifiable | This field can be used to define a loose grouping of reality data. This property may not contain any control sequence such as a URL or code.                                                                                                                                     |
| group                | string        | Optional                            | Modifiable | This field can also be used to define a second level of grouping.This property may not contain any control sequence such as a URL or code.                                                                                                                                       |
| description          | string        | Optional                            | Modifiable | A textual description of the reality data. This property may not contain any control sequence such as a URL or code.                                                                                                                                                             |
| dataCenterLocation   | string        | Generated                           | Read-only  | Identifies the Azure Data Center used. for details about Data Center refer to the DataCenterLocation section below.                                                                                                                                                              |
| rootDocument         | string        | Optional                            | Modifiable | Used to indicate the root document of the reality data. The root document can be in a subfolder and is then specified. e.g. "Tile_Root.json" or "Folder1/SubFolder1/File.json" are valid values. The service reserves the right to validate the existence of the indicated file. |
| size                 | integer       | Generated                           | Read-only  | The size of the reality data in Kilobytes. This size can be temporarily not up to date after a change, see Authoring and Size section below.                                                                                                                                     |
| authoring            | boolean       | Optional                            | Modifiable | A boolean value that indicates if data is being created or uploaded. See Authoring section for details.                                                                                                                                                                          |
| classification       | string        | Required                            | Modifiable | Specific value constrained field that indicates the nature of the reality data. See Classification and Type section for details.                                                                                                                                                 |
| type                 | string        | Required                            | Modifiable | A key indicating the format of the data. See Type section below about registered types and more details.                                                                                                                                                                         |
| acquisition          | object        | Optional                            | Modifiable | Provides information regarding the acquisition, such as dates and acquirer used. See Acquisition section below.                                                                                                                                                                  |
| extent               | object        | Optional                            | Modifiable | contains the rectangular area on the Earth which encloses the reality data. See Extent section below.                                                                                                                                                                            |
| accessControl        | string        | Optional (Defaults to Organization) | Modifiable | A flag indicating the visibility of the reality data. Defaults to Organization. See AccessControl section for more details.                                                                                                                                                      |
| modifiedDateTime     | string(date)  | Generated                           | Read-only  | Read-Only. ISO-8601 compliant time (UTC) of last modification of the reality data. e.g. "2017-05-10T13:43:03Z"                                                                                                                                                                   |
| lastAccessedDateTime | string(date)  | Generated                           | Read-only  | Read-Only. ISO-8601 compliant time (UTC) of last access of the reality data. e.g. "2017-05-10T13:43:03Z"                                                                                                                                                                         |
| createdDateTime      | string(date)  | Generated                           | Read-only  | Read-Only. ISO-8601 compliant time (UTC) of the creation of the reality data. e.g. "2017-05-10T13:43:03Z"                                                                                                                                                                        |

### AccessControl

To each reality data is associated an AccessControl property which can take one of four values that indicate who can use the data, explained below.

- `Public`: Indicates anyone, even users external to an organization can use the data.
- `Organization`: Indicates any member of the organization the data belongs to can use the data.
- `Project`: Indicates data can only be used as part of a project.
- `Private`: Only the owner can use the data.

### Authoring

The Authoring property value is not controlled by the RealityData API, it is left to be managed by the application. The value also does not change the behavior of the API. The purpose of this property is to show if new model data is being uploaded to the RealityData. This is particularly useful when a RealityData is shared or possibly managed by multiple users. It is up to the creator of the application to implement behavior within the application that uses the Authoring property value.

### Classification and Types

#### Classification

While Classification defines the nature of the RealityData, it is related to the Type property.

The following values are currently supported:

- `Terrain`: Data is a representation of the terrain.
- `Imagery`: Data is vertical, satellite or orthophoto imagery.
- `Pinned`: Any non-geographic data that may be pinned to a location on Earth.
- `Model`: Most common classification. Data is a modelisation of the a real world object or feature.
- `Undefined`: For non-reality data used as input for reality data creation.

#### Types

The Type property of the Reality Data indicates the format of the data contained in a reality data. Although the Type field is a free string some specific values are reserved.

The following are the reserved keywords:

| Type                 | Display Type                          | Classification | iTwin.js Ready |
| :------------------- | :------------------------------------ | :------------- | :------------- |
| Cesium3DTiles        | Cesium 3D Tiles                       | Model          | Yes            |
| OPC                  | Web Ready Orbit Point Cloud           | Model          | Yes            |
| RealityMesh3DTiles   | Web Ready 3D Scalable Mesh            | Model          | Yes            |
| Terrain3DTiles       | Web Ready Terrain Scalable Mesh       | Model          | Yes            |
| 3MX                  | ContextCapture 3MX                    | Model          |                |
| 3SM                  | 3D Scalable Mesh                      | Model          |                |
| CCCloudPrject        | ContextCapture Cloud Project          | Undefined      |                |
| CCImageCollection    | ContextCapture Image Collection       | Undefined      |                |
| CCOrientations       | ContextCapture Orientations           | Undefined      |                |
| ContextCaptureInputs | ContextCapture Inputs                 | Undefined      |                |
| ContextDetector      | Context Detector                      | Undefined      |                |
| ContextScene         | Context Scene                         | Undefined      |                |
| DAE                  | Collada                               | Model          |                |
| DGN                  | Bentley DGN                           | Model          |                |
| DSM                  | Digital Surface Model                 | Model          |                |
| FBX                  | Autodesk FBX                          | Model          |                |
| GLB                  | Graphics Language Binary              | Model          |                |
| GLTF                 | Graphics Language Transmission Format | Model          |                |
| KML                  | Google Earth KML                      | Model          |                |
| LAS                  | LAS Point Cloud                       | Model          |                |
| LAZ                  | LAZ Point Cloud                       | Model          |                |
| LOD                  | LOD Tree                              | Model          |                |
| LodTree              | OpenCities Planner LodTree            | Model          |                |
| OBJ                  | Wavefront OBJ                         | Model          |                |
| OMI                  | Multiresolution Image                 | Imagery        |                |
| OMR                  | Mapping Resource                      | Undefined      |                |
| Orthophoto           | Imagery                               | Imagery        |                |
| OrthophotoDSM        | Orthophoto and DSM                    | Imagery        |                |
| OSGB                 | OpenSceneGraph Binary                 | Model          |                |
| OVF                  | Vector File                           | Undefined      |                |
| OVT                  | Tiled Vector File                     | Undefined      |                |
| PLY                  | Polygon File Format                   | Undefined      |                |
| PointCloud           | Pointools POD                         | Model          |                |
| S3C                  | Smart3D Capture                       | Model          |                |
| ScanCollection       | ContextCapture Scan Collection        | Undefined      |                |
| SHP                  | ESRI Shapefile                        | Undefined      |                |
| SLPK                 | Scene Layer Package (SPLK)            | Model          |                |
| SpaceEyes3D          | SpaceEyes3D Builder                   | Model          |                |
| STL                  | Stereo Lithography                    | Model          |                |
| TSM                  | Terrain Scalable Mesh                 | Model          |                |
| Unstructured         | Unstructured Data                     | Undefined      |                |

Other types are commonly used that clearly indicate the type. For example tif, jpg, pdf can be used and the intended format is clear. Most of the time the format clearly imposes the Classification. Point Clouds, Web Ready Scalable mesh 3MX are necessarily Model data since they are modelisation of the real world. On the other hand, some format can be of different classification. For example the tif format supports the storage of Terrain data when the pixel is elevation data or Imagery for satellite data. Likewise a jpg file can represent an orthophoto (Imagery) or be an oblique picture of a feature (a neighborhood, people,...) then these are to be classified as Pinned data. Similarly, a pdf document could be a written document (Pinned) or a Map (Model).

### DataCenterLocation

DataCenterLocation represents a data center location. The RealityData API supports many different data location geographically located at different places. Usually, the data center location is the same as the CONNECT Project in which the reality data is created.

Data center locations used by RealityData API are :

- `East US`
- `North Europe`
- `Southeast Asia`
- `Japan East`
- `UK South`
- `Australia East`

### Acquisition

The Acquisition object contains the ISO-8601 compliant start time and end time (UTC) of data acquisition, as well as the Acquirer. The Acquirer is a text indicating by whom or what instance or process has acquired the data. See example below:

```json
"acquisition": {
          "startDateTime": "2021-05-12T20:03:12Z",
          "endDateTime": "2021-05-15T05:07:18Z",
          "acquirer": "Data Acquisition Inc."
      },
```

### Extent

The Extent contains the rectangular area on the Earth which encloses the reality data. Defined by the most southwestern point and the most northeastern point. The latitude and longitude types are `double`. See example below:

```json
"extent": {
              "southWest": {
                  "latitude": 50.1171,
                  "longitude": -122.9543
              },
              "northEast": {
                  "latitude": 50.1172,
                  "longitude": -122.9543
              }
          },
```

### Size

After the model data is uploaded successfully to the RealityData, whether due to the creation or a modification of the RealityData, the Size property is then scheduled to be recalculated. This process can take a few minutes, so the Size value might not be accurate immediately after the upload is complete. For large model uploads, meaning a few gigabytes or more, this process can take longer.
