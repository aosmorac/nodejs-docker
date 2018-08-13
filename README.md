# phpUnit-test

Docker PHP con Nodejs y aplicación base

## Getting Started

These instructions allow you to run a nodejs docker and edit the source code from your own pc. You must have git, docker and docker-compose installed.

### Running

Clone this repo

```
git clone https://github.com/aosmorac/nodejs-docker.git
```

Go to code folder 

```
cd nodejs-docker
```

Run docker 

```
docker-compose up
```
Go into docker container

```
sudo docker exec -i -t nodejs-backend sh
```

### Check Base App

Go to an web explorer and open http://localhost:3000

You can check the initial doc in http://localhost:3000/api-docs/ for the initial authentication functionalities.
