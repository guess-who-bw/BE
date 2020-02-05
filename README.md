# BE

## DATA STRUCTURE

### Users
POST to /api/register

expects:
```
{
    email: "email",
    password: "password"
}
```
returns:
```
{
    id: id, 
    token: "token",
    points: points
}
```

POST to /api/login
expects: 
```
{
    email: "email",
    password: "password"
}
```
returns:
{
    id: id, 
    token: "token",
    points: points
}

PUT to /api/users/:id
expects: 
```
{
    points: points,
}
```
returns:
```
{
 "message": "User updated."
}
```
-

DELETE to /api/users/:id
returns:
```
{
 "message": "User deleted."
}
```
-
