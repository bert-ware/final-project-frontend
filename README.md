# App
# Developers: 
Robert Ledezma - Alberto Correia  
# Link to App: 



## Description

An app to calculate cost of value of cocktails recipes, manage providers and obtain usefull information about them
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so I can add and manage my providers and recipes  
- **login** - As a user I want to be able to log in on the webpage so I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so I can make sure no one will access my account
- **recipes list** - As a user I want to see all my recipes.
- **recipes create** - As a user I want create a new recipe.
- **recipes details** - As a user I want to see usefull info about my recipes (cost price, recomended sale price...).
- **provider list** - As a user I want to see all my providers.
- **provider details** - As a user I want to see the list of products and general information of the especific provider

## Backlog

- **Share user recipes** 


## ROUTES:

|Method|URL|Description|
|---|---|---|
GET | /auth/login | redirects to / if user logged in. Renders auth/login
POST | /auth/login | redirects to / if user logged in

```
body:
    - username
    - password

```

GET | /auth/signup| redirects to / if user logged in. Renders auth/signup

```
body:
    - username
    - password
```
GET | / | renders the homepage. if the user is not logged in, render access. 
GET | /event/id | renders event-detail
POST | /event/id | update event. redirect /event-detail
```
body:
    - username
    - event id 
    - image
```
GET | /escape-room-list | renders escape-room-list
POST | /logout | redirects to /
GET | /escape-room-detail | renders escape-room-detail
POST | /escape-room/id | 
```
body:
    - username
    - escape-room
    - date
    - reserved time
    - escape-room id
```



## Models

```
User model
- ID: Object ID
- username: String
- password: String
- image: String

```
```
provider model
- ID: Object ID
- name: String
- adress: String
- description: String
- telephone: Number
- general info: String

```
```
Product model
- ID: Object ID
- name: String
- graduation: Number
- price: Number
- format: Number
- general information: String
- provider: Provider_id

```
```

Recipe model
- ID: Object ID
- name: String
- suggested price: Number
- ingredients: [Products]
- user: User._id

```
``` 

## Links


### Git

The url to your repository and to your deployed project

[Repository Frontend Link] (https://github.com/bert-ware/final-project-frontend)
[Repository Frontend Link] (https://github.com/bert-ware/final-project-backend)


### Kanban

[Under construction](https://trello.com/b/juxGftXn/proyecto-final)

### Slides

The url to your presentation slides

[Under construction](https://colorlib.com/wp/wp-content/uploads/sites/2/ComingSoon_v5.jpg)

