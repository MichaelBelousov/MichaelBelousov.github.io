# Design Element Classification

The 3D (iModel) Classification model predicts a 'Class' or type for every geometric element in an iModel. The available Classes for each iModel are selected based on the 'Studied Key'. Currently we support three different Studied Keys: Categories, User Labels, and ECClasses. For example, if an inference job is run on an iModel with Categories selected as the Studied Key, the ML Pipeline will return a prediction of how it thinks every element in the iModel should be classified. The prediction will contain a list of possible matches with a 'Class Confidence' score for each possible match.

## Misclassification Use Case

The most natural use case for Design Element Classification is to detect misclassifications in one's iModels. Suppose a Pipe has been misclassified in the source iModel as a Beam, the Design Element Classification ML model can help to identify problematic elements and even make suggestions as to what the proper classifications should have been.

## Inputs

The only input of Design Element Classification is an iModel at a particular Changeset.

## Outputs

The Design Element Classification model outputs two prediction files - one lists all the predictions for every element in the iModel, and the other contains only the misclassified elements filtered by a given threshold of confidence.

**Misclassifications** refer to elements where the 'Current Class Confidence' is lower than the 'Predicted Class Confidence' where 'Current' means the label given in the source data.

**Class Confidence** represents the confidence of belonging to a given Class. The value is normalized and relative to other Classes in the iModel using the [softmax](https://en.wikipedia.org/wiki/Softmax_function) function (for each element, the sum of the confidences for each possible Class is equal to 1). For this reason, in iModels with many similar Classes, elements may not have any predictions with very high confidence scores. Instead, to see if there is a strong top choice, compare the highest Class Confidence with the Class Confidence of the other Classes to see relatively how much strongly the Design Element Classification model prefers that choice.

List of all outputs:

- **EC Instance ID**
- **EC Class Name**
- **Source Model Name**
- **Source Model ID**
- **User Label**
- **Category Label**
- **Category Description**
- **Category ID**
- **Mesh ID**: Unique 3D mesh ID.
- **Text ID**: Unique text ID.
- **Studied Key**: Columns used to group elements together. These columns are concatenated together and become the Class. Currently supports either Categories, User Labels, or ECClasses.
- **Current Class Rank**: Confidence ranking position of the current label, according to the model (a positive integer in {1, ..., N} where N is the total number of Classes, and lower is better).
- **Current Class Confidence**: Confidence of the model that this Class is the correct choice for a given design element. This confidence score is relative to other Class Confidences (higher is better, between [0, 1]).
- **Best Prediction**: Label of the best Class, according to the model.
- **Predicted Class Confidence**: Best Class Confidence (higher is better).
- **Classification Confidence**: Relative confidence score comparing "Current Class Confidence" and "Predicted Class Confidence" (a higher value means the model thinks there is a higher chance of misclassification). `Confidence = 1 - (PredictedClassConfidence - CurrentClassConfidence)`. Typically values are between [0, 1] since only misclassifications are shown.
