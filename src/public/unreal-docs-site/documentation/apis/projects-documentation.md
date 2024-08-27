## Projects API

The Projects API provides the ability to manage projects, project team members, and project roles. You can use the API to automate administrative functions or to integrate with other systems.

### Projects

Projects are used to represent engineering projects for an infrastructure asset. iModels, reality data, and engineering documents can be associated with a project. The Projects API is used to manage projects, project team members, and project roles.

### Project team members

Project team members are the people who are participating in a project. Each team member is associated with a Bentley user account. The team members for a project can be in the same organization as the project or in different organizations. A project team member can have one or more roles which describe their function in the project.

### Project roles

Project roles specify the role that a team member performs in a project. Roles are used to control access to resources and services. The project roles are typically defined by a project administrator and they are assigned to project team members. A project team member can have one or more roles.

### Service Applications

Service Applications, used for machine-to-machine communication, can be authorized to access resources for a given project. Just like project team members, Service Applications have a user account. This allows you to authorize Service Applications using the same process as a normal user. The email for the Application can be found in the Application registration portal. To authorize, a role must be assigned to the Application’s account for a given project.

### Typical Project Workflows:

- Admins can Create, Update or Delete a Project.
- Admins can create Project Roles.
- Admins can manage the Project's Team by adding or removing their Project Roles.
- Users with access to the Project can mark the Project as a favorite or recently used.
