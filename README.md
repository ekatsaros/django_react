# django_react
Boilerplate for Django with React project

This is a basic setup for a Django React project development.



## Setting Up the environment:

	*python 3 is required*

1. Create python virtualenv (optional but better to use one check pyenv)

2. Install requirements. 
```bash
  pip3 install -r requirements.txt
```

3. Install node modules (nodejs and npm required)
```bash
	$ npm install
```

4. Run Django Server
```bash
$ python3 manage.py runserver
```

5. Run react development Server
```bash
$ npm run start:dev
```
Go to https://localhost:8000 to see the results.

Enjoy developing in Django & React!


## Setting Up the environment using Docker:

1. Install Docker and docker-compose
2. Run the poject
```bash
$ docker-compose up
```
Go to https://localhost:8000 to see the results.

```bash
$ docker-compose up -d  (to run in the background)
```

