# Events API


## AUTH
### POST

    /singup:
    body:
        - email
        - password

    /signin
    body:
        - email
        - password
    return:
        - token: String


## Events
for events end-points you need to provide auth token
### GET

    /page/:page
    return:
        - array of events on page

    /:eventId
    return:
        - event by id

### POST

    /
    body:
        - name: String
        - date: Date
    return:
        - event id

### PATCH

    /:eventId
    body (Array of objects witch contains property name and its value to update):
        [
            {
                "name": "String"
            }
        ]

### DELETE

    /:eventId