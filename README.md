# BE

## DATA STRUCTURE

### Users
POST to /api/register

expects:
```
{
    username: "username",
    password: "password"
}
```
returns:
```
{
    "id": 1, 
    username: "username",
    password: "password"
}
```

POST to /api/login
expects: 
```
{
    username: "username",
    password: "password"
}
```
returns:
token

PUT to /api/users/:id
expects: 
```
{
    points: 12,
}
```
returns:
-

DELETE to /api/users/:id
returns:
-
