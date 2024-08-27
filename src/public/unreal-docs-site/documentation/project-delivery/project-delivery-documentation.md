# Review APIs

## Design Review

### Issues

Issues Resolution provides a central repository where you can easily manage, assign, and track the progress of all project issues. Team members can communicate issues from the field to give project managers insight into issues so they can alert appropriate project participants to immediate action.

An issue includes a subject, description, assignee, and status. Comments can be added to an issue and they can be used to communicate among project team members. Additional information like files, saved views, and markups can be attached to an issue. The audit trail provides the history of all the changes to an issue.

The Issues API provides the ability to manage issues, comments, attachments, and audit trails.

### Forms

The Forms service lets project members collect a variety of data through filling out customizable forms. Project administrators can design forms for capturing meeting minutes, daily work logs, asset and site observation results, and more. Project members can then fill out these forms while working in the field. Like an issue, a form can be assigned to a particular user and can move through statuses in a workflow as work on it is completed.
 
The Forms REST API provides access to the raw data entered into these forms, including the ability to read and set field values, attached files, and comments, as well as view the audit trail (history) of a particular filled-out form.

## Design Validation

Design Validation is the process of assessing the quality and completeness of an iModel in support of one or more information exchange workflows. In general terms, this involves checking to see if the contents of the iModel meet the information requirements of the consuming application or user in the workflow. Design Validation plays a critical role in ensuring the required information is delivered. Design Validation includes three main components: rules, tests, and results.

The Validation API initially includes the ability to retrieve the details for design validation results. API support for rules and tests is coming soon.

### Validation rules

Rules can check individual properties of elements in your iTwin to make sure the values meet the criteria of being set, being unique, falling within a certain range, or matching a specific pattern.

### Validation tests

Property tests allow rules to be grouped into logical sets to be executed at one time. Clash detection tests allow two sets of models or categories to be specified and checked against one another for collisions.

### Validation results

Results are provided for each type of test and they contain any elements whose properties do not meet the criteria specified by the rules or that collide with another element in the specified sets.

### Typical Validation and Clash Detection Workflows

The process for validating iModels consists of the following steps:

- Define one or more rules that specify an iModel item property requirement.
- Define a test and then add rules to it.
- Run a test for a specific iModel and version that you want to validate.
- Retrieve the results and identify the failures.

The process for detecting clashes in iModels consists of the following steps:

- Add a Clash Detection Test.
- Specify an iModel, version, and clash detection type.
- Designate the two sets to check against.
- Run the clash detection test.
- Retrieve and review the clash detection results.
