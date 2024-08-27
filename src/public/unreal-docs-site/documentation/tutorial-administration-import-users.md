# Import Users

This tutorial will demonstrate how to add users to a Project from a CSV file. Each endpoint in this tutorial requires authorization. This tutorial is accompanied by a sample powershell script located [here](https://wwww.bentley.com). Authorization is provided as a separate script.

## APIs/Endpoints used in this tutorial

Projects API:

- ["Add project team member" operation](/api-groups/administration/apis/projects/operations/add-project-team-member)

## Steps

### 1. Request access token for use in Authorization header

Obtaining an access token is required for all samples. See the _Authorization_ topic under _Tutorials_ for more information.

### 2. Read users in from CSV

Reading users from a CSV is dependent upon your particular development framework and is outside the scope of this tutorial.

### 3. Add each user to the Project

Adding a team member to a project requires POSTing the request to the `projects/v1/{id}/members` endpoint.

#### Method and endpoint

```HTTP
POST https://api.bentley.com/projects/validation/38b7e366-bc20-4bb1-9572-0797cf5221f/members HTTP/1.1
```

Two headers are required. An authorization header is needed. See the _Authorization_ topic under _Tutorials_ for more information.

#### Required headers

```HTTP
Authorization: Bearer <access_token>
Content-Type: application/json
```

#### Request body

The request body is specified as JSON and requires the email and roleNames properties. The API works with one user at a time, thus one _email_. Multiple roles may be requested via the _roleNames_ array. The request body may look like:

```HTTP
{
    "email": "john.doe@my-org.com",
    "roleNames": [
        "Project Role 1",
        "Project Role 2"
    ]
}
```

#### Putting it all together

Putting it all together, and the request should look like:

```HTTP
POST https://api.bentley.com/projects/validation/38b7e366-bc20-4bb1-9572-0797cf5221f/members HTTP/1.1
Authorization: Bearer <access_token>
Content-Type: application/json
{
    "email": "john.doe@my-org.com",
    "roleNames": [
        "Project Role 1",
        "Project Role 2"
    ]
}
```
