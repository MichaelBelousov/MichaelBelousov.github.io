# Administration Tutorials

These tutorials center around the Projects, Assets, and Users APIs. Each tutorial has an accompanying sample available on GitHub int he iTwin Services repository. Samples are written in PowerShell. Tutorials will present calls as pure HTTP requests.

## APIs/Endpoints used in these tutorials

Projects API:

- ["Get project roles" operation](/api-groups/administration/apis/projects/operations/get-project-roles)
- ["Get project team members" operation](/api-groups/administration/apis/projects/operations/get-project-team-members)
- ["Create project role" operation](/api-groups/administration/apis/projects/operations/create-project-role)
- ["Add project team member" operation](/api-groups/administration/apis/projects/operations/add-project-team-member)

## Authorization

Obtaining an access token is required for all samples. See the _[Authorization](/api-groups/administration/tutorials/tutorials-authorization)_ topic for more information.

```HTTP
Authorization: Bearer <access_token>
```

## List of tutorials

### 1. [Import Users into Project](/api-groups/administration/tutorials/tutorial-administration-import-users)

> Uses the Projects "add project team member" endpoint to add team members to a project. Requires a CSV file with the users & roles to import.

### 2. [Copy Users between Projects](/api-groups/administration/tutorials/tutorial-administration-copy-members)

> Copies users and roles from one project to another
