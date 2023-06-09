import express from "express";
const app = express()
const api = [
  {
    "cursor": "glG_oAx7rmdmajUzOWVsNmt1aGdsOGkw",
    "service": {
      "id": "srv-ch02fj539el6kuhgl8i0",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2023-04-19T17:41:43.009745Z",
      "name": "PracticodeServer",
      "notifyOnFail": "default",
      "ownerId": "usr-cgu1m4iut4mcfrg8dbvg",
      "repo": "https://github.com/shulamitmelamed/Practicode",
      "rootDir": "./BackEnd/TodoApi",
      "slug": "practicodeserver-gfpp",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "web_service",
      "updatedAt": "2023-04-25T13:37:23.316555Z",
      "serviceDetails": {
        "disk": null,
        "env": "docker",
        "envSpecificDetails": {
          "dockerCommand": "",
          "dockerContext": ".",
          "dockerfilePath": "Dockerfile"
        },
        "healthCheckPath": "",
        "numInstances": 1,
        "openPorts": null,
        "parentServer": null,
        "plan": "free",
        "pullRequestPreviewsEnabled": "no",
        "region": "singapore",
        "url": "https://practicodeserver-gfpp.onrender.com"
      },
      "imagePath": null
    }
  },
  {
    "cursor": "GuoiqwoP9i1lM29yZGRsYXFqMHFnNnYw",
    "service": {
      "id": "srv-ch01e3orddlaqj0qg6v0",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2023-04-19T16:30:17.94473Z",
      "name": "PracticodeClient",
      "notifyOnFail": "default",
      "ownerId": "usr-cgu1m4iut4mcfrg8dbvg",
      "repo": "https://github.com/shulamitmelamed/Practicode",
      "rootDir": "./FrontEnd",
      "slug": "practicodeclient-zhb4",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "static_site",
      "updatedAt": "2023-04-25T15:25:58.774325Z",
      "serviceDetails": {
        "buildCommand": "npm run build",
        "parentServer": null,
        "publishPath": "build",
        "pullRequestPreviewsEnabled": "no",
        "url": "https://practicodeclient-zhb4.onrender.com"
      },
      "imagePath": null
    }
  }
]
const port = 3000
console.log("nice!!!!!!!")
app.get('/', (req, res) => {
    res.send(api)
})
app.listen(port, () => {
    console.log("app is running!")
})