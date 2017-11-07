define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "General information on URL",
    "name": "_",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message informing about wich URL to call for API.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes.js",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/api/",
    "title": "Welcome message",
    "name": "_api_",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message informing the service is working.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/routes.js",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/professors/:id",
    "title": "Get  professor with specified ID",
    "name": "Get_professor_by_id",
    "group": "Professors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "JSON",
            "description": "<p>object reppresenting the professor.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProfessorNotFound",
            "description": "<p>An information message (encapsulated in a JSON Object named error).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/routes.js",
    "groupTitle": "Professors"
  },
  {
    "type": "get",
    "url": "/professors/",
    "title": "Get all professors in DB",
    "name": "Get_professors_list",
    "group": "Professors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "JSON",
            "description": "<p>array with all professors in DB.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/routes.js",
    "groupTitle": "Professors"
  },
  {
    "type": "put",
    "url": "/professors/:id",
    "title": "Update professor with specified ID",
    "name": "_professors__id",
    "group": "Professors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "status",
            "optional": false,
            "field": "Boolean",
            "description": "<p>value, true if the update was successful.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "JSON",
            "description": "<p>object with all the fields of the professor (modified).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProfessorNotUpdated",
            "description": "<p>An information message (encapsulated in a JSON Object named error).</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "AuthenticatedProfessor",
        "title": "Any authenticated Professor",
        "description": "<p>Restrict access to write, update and delete options</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "./api/routes.js",
    "groupTitle": "Professors"
  }
] });
