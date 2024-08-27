## Changed Elements API

The Changed Elements API provides consumers with the elements that have changed in an iModel between two changesets. This API has two operations:

1. Enable Change Tracking
2. Get Comparison

Before obtaining a comparison, it is necessary to enable change tracking of an iModel. This means that the API will be listening to any new `Named Versions` that are created on the iModel. When that happens, the API will process the new changes and store a summary of all the elements that have changed.

After tracking is enabled and the iModel is processed, the comparison endpoint may be used to query for a summary of changed elements between any two given `ChangeSets`.

For more information on how to use the API, please check the [Changed Elements API Tutorial](/tutorials/changed-elements-api/)
