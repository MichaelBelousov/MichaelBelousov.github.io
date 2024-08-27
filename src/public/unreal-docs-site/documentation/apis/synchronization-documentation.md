## Synchronization

The Synchronization API provides the ability to aggregate, align and synchronize engineering data from different formats to an iModel. With this API, you can set up a connection with various source files and, with a job run, synchronize those to an iModel. Requests will be processed in a cloud using associated iTwin connectors.

The API offers the following:

- File synchronization from [iTwin Storage service](/apis/storage/).
- iTwin connectors for various design applications and interchange formats. See the complete list in [supported formats section](/apis/synchronization/supported-formats/).

To get started, take a look at our tutorials [here](/tutorials/synchronization-tutorial) and sample [here](https://github.com/iTwin/synchronization-api-sample-app).

### Connection

The synchronization process is based on connections that establish links from design files to iModels. There could be multiple connections for an iModel, and those could be executed on-demand multiple times to continuously synchronize changes. The history of runs is preserved and can be monitored.

### Source File

A source file entity defines the link between a specific file in the data source and iTwin connector during the synchronization run. A source file having geographical coordinate information should be marked as the spatial root.

### Run

A run defines a single connection synchronization process and can be initialized by sending a run start request. This entity has properties like status, duration, and others. There can be only one run per connection at a time.

### Connector

An iTwin Connector will process a file from an application such as MicroStation and transform the model's content (geometry, properties, and relationships) into an iModel. It will also include creating a schema from the source data. You can synchronize several models using the same Connector or different models using various Connectors to achieve the required iModel.

iTwin Connectors detect the differences in the source models between job runs. The synchronization will produce [ChangeSets](/apis/imodels/) – which contain the changes that are sent to iModelHub. This is the critical difference between a Connector and a one-time converter.

The first time the synchronization is run, the Changeset will contain the content of the entire model. Subsequent synchronizations will result in Changesets being created for only the differences in the model compared to what already exists in the iModel. If no changes have been made to the source model, the iTwin Connector will not process the model, and no additional Changesets will be pushed.

### Authorization

The synchronization process usually takes time and is performed in the background. For that, we need to store the connection owner's refresh token. You can get it by using [Get Authorization Information API](/apis/synchronization/operations/get-authorization-information/). This API will return the current status and a redirect URL if the token has to be renewed.
