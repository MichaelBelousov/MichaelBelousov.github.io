# Copy Project Team Members And Roles To Another Project

This tutorial will demonstrate how to copy team members and roles from one Project to another. Each endpoint in this tutorial requires authorization. This tutorial is accompanied by a sample powershell script located [here](https://wwww.bentley.com). Authorization is provided as a separate script.

## APIs/Endpoints used in this tutorial

Projects API:

- ["Get project roles" operation](/api-groups/administration/apis/projects/operations/get-project-roles)
- ["Get project team members" operation](/api-groups/administration/apis/projects/operations/get-project-team-members)
- ["Create project role" operation](/api-groups/administration/apis/projects/operations/create-project-role)
- ["Add project team member" operation](/api-groups/administration/apis/projects/operations/add-project-team-member)

### Notes

Two headers are required in each of the requests, that are used in this tutorial. An authorization header is needed. See the _Authorization_ topic under _Tutorials_ for more information.

#### Required headers

```HTTP
Authorization: Bearer <access_token>
Content-Type: application/json
```

## Steps

### Request access token for use in Authorization header

Obtaining an access token is required for all samples. See the _Authorization_ topic under _Tutorials_ for more information.

### Get project roles from the source project.

Getting roles from the source project requires sending a GET request to the `projects/v1/{id}/roles` endpoint.

#### Request example

```HTTP
GET https://api.bentley.com/projects/v1/38b7e366-bc20-4bb1-9572-0797cf5221f/roles HTTP/1.1

Authorization: Bearer <access_token>
Content-Type: application/json
```

#### Response body example

```HTTP
{
    "roles": [{
            "roleId": "752b5a3d-b9f2-4845-824a-99dd310b4898",
            "displayName": "Project Reader",
            "description": "Project Reader description"
        },
        {
            "roleId": "ce5399cc-088c-4c48-9f7b-0bff2d72fc25",
            "displayName": "Project Contributor",
            "description": "Project Contributor description"
        }
    ]
}
```

### Add each role to the destination project

Adding a role to a project requires sending a POST request to the `projects/v1/{id}/roles` endpoint.

#### Method and endpoint

```HTTP
POST https://api.bentley.com/projects/v1/38b7e366-bc20-4bb1-9572-0797cf5221f/roles HTTP/1.1

Authorization: Bearer <access_token>
Content-Type: application/json
{
    "displayName": "Sample role",
    "description": "Sample role description"
}
```

The request body is specified as JSON and requires _displayName_ and _description_ as properties. The API works with one role at a time.

The response returns a JSON object that contains displayName, description and roleId properties. This response body could be used to set roleIds for the users we want to copy from the source project to the destination project.

#### Response body example

```HTTP
{
    "role": {
        "roleId": "faa3dca1-a901-4659-9da1-d9f29ddcc288",
        "displayName": "Project Role",
        "description": "An example project role"
    }
}
```

### Get project team members from the source project.

Getting team members from the source projects requires sending a GET request to the `projects/v1/{id}/members` endpoint.

#### Request example

```HTTP
GET https://api.bentley.com/projects/v1/38b7e366-bc20-4bb1-9572-0797cf5221f/members HTTP/1.1

Authorization: Bearer <access_token>
Content-Type: application/json
```

#### Response body example

```HTTP
{
    "members": [{
            "userId": "99cf5e21-735c-4598-99eb-fe3940f96353",
            "email": "John.Johnson@org.com",
            "givenName": "John",
            "surname": "Johnson",
            "organization": "Organization Corp.",
            "roles": [
                "Read Access",
                "Write Access"
            ]
        },
        {
            "userId": "25407933-cad2-41a2-acf4-5a074c83046b",
            "email": "Maria.Miller@org.com",
            "givenName": "Maria",
            "surname": "Miller",
            "organization": "Organization Corp.",
            "roles": [
                "Read Access"
            ]
        }
    ],
    "_links": {
        "next": {
            "href": "https://api.bentley.com/projects/806b19d5-c037-48a4-aa98-e297c81453f1/member?$skip=2&$top=2"
        }
    }
}
```

### Add each team member to the destination project

Adding a member to a project requires sending a POST request to the `projects/v1/{id}/members` endpoint.

#### Method and endpoint

```HTTP
POST https://api.bentley.com/projects/v1/38b7e366-bc20-4bb1-9572-0797cf5221f/members HTTP/1.1

Authorization: Bearer <access_token>
Content-Type: application/json
{
    "userId": "john.doe@my-org.com",
    "roleIds": [
        "722b866c-ef99-48e7-8d9b-d59953f2231c"
    ]
}
```

The request body is specified as JSON and requires the userId and roleIds properties. The API works with one user at a time. Multiple roles may be assigned to the user via the roleIds array.
