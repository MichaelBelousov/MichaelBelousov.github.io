# Administration API

The Administration API provides the ability to manage users, projects, project team members, and project roles. You can use the API to automate administrative functions or to integrate with other systems.

## Users

A Bentley user account is required to use Bentley services. A developer needs to sign in to their Bentley account in order to try an API or register an application in the iTwin Platform portal. An end user of an iTwin Platform application must sign in to their Bentley account in order to establish their identity and authorize access to their data.

A user account is associated with a single organization or company. The Users API provides the ability to manage the users in an organization. A Bentley user account includes a user profile which contains information about a user's name, contact information, and language preference. The Users API provides an endpoint to retrieve information from a user's profile.

## Projects

Projects are used to represent engineering projects for an infrastructure asset. iModels, reality data, and engineering documents can be associated with a project. The Projects API is used to manage projects, project team members, and project roles.

## Project team members

Project team members are the people who are participating in a project. Each team member is associated with a Bentley user account. The team members for a project can be in the same organization as the project or in different organizations. A project team member can have one or more roles which describe their function in the project.

## Project roles

Project roles specify the role that a team member performs in a project. Roles are used to control access to resources and services. The project roles are typically defined by a project administrator and they are assigned to project team members. A project team member can have one or more roles.

## Information associated with a project

A project can involve many types of information including iModels, reality data, files, issues, and design validation results. The Projects API can be used to retrieve the information that is associated with a specific project.
