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
```
{
    id: id, 
    token: "token",
    points: points
}
```

GET to /api/users/:id
returns:
```
{
    id: id
    email: "email",
    password: "password",
    points: points
}
```

GET to /api/tweets
returns:
```
rounds data structure
```


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


DELETE to /api/users/:id
returns:
```
{
 "message": "User deleted."
}
```

