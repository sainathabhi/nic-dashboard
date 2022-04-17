import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardreportService {

  constructor(private http: HttpClient) { }
  tokenGenrate()
  {
    // const params = new HttpParams({
    //   fromObject: {
    //     client_id: 'admin-cli',
    //     password: 'Test.1234@',
    //     grant_type: 'password',
    //     username: 'prod-mdo-admin@yopmail.com',
    //   }
    // });
    var payload = "client_id=admin-cli&password=Test.1234&grant_type=password&username=prod-mdo-admin%40yopmail.com"
    var headers = {
      'content-type': "application/x-www-form-urlencoded",
      'authorization': "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5RVZPODkwNHZzV0pMdWhxanN6aVFLeEVZTFdZZ0MwSiJ9.0l5-vg_d_IHtNPfhp6l4OM-dmAG8azpV2amxDYLu110",
      'cache-control': "no-cache",
      'postman-token': "97dea8fa-0636-5b6e-3408-a54a257e1275"
      } 
    // const httpOptions = {
    //       headers: new HttpHeaders({
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5RVZPODkwNHZzV0pMdWhxanN6aVFLeEVZTFdZZ0MwSiJ9.0l5-vg_d_IHtNPfhp6l4OM-dmAG8azpV2amxDYLu110'
    //       })
    //     };


    return this.http.post('/auth/realms/sunbird/protocol/openid-connect/token',payload, {headers});
  }
  userData(token:any)
  {
    console.log("service token-------------")
    console.log(token)
    var token1='eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwMTRYR1lrdHAxUnNScEZZeXZGTnZuekUxVDBMT3hVSHBoNnhHSzUxdGhvIn0.eyJqdGkiOiJlMTE5NDhjYy0yZTQ5LTRiZWYtYWMzZi0wNzMyZTE5OTE5MzAiLCJleHAiOjE2NDk4NzQ1ODIsIm5iZiI6MCwiaWF0IjoxNjQ5ODMxMzgyLCJpc3MiOiJodHRwczovL2thcm1heW9naS5uaWMuaW4vYXV0aC9yZWFsbXMvc3VuYmlyZCIsInN1YiI6ImY6YmFhZGE4YjEtZTYyZS00NGM0LWExNGQtNjcwMmVhOTBmNDk2OjY3NzhjYzJiLTgwNzUtNDlhNC05ZTdkLWRlYWZhNGQwZDllZiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluLWNsaSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImE1ZmJjODYxLTk5NzctNDc5NC1hMDg2LTY5ZmU1ZTUzZTBkYiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiIiLCJuYW1lIjoiUHJvZCBNZG8gQWRtaW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwcm9kbWRvYWRtaW5fNng0bCIsImdpdmVuX25hbWUiOiJQcm9kIiwiZmFtaWx5X25hbWUiOiJNZG8gQWRtaW4iLCJlbWFpbCI6InByKioqKioqKioqKioqQHlvcG1haWwuY29tIn0.Zset2xichKhqnI29o8vjQTsllsrmjuw5cHjVo9Wd5fHNL-2HrJVnt5xc2X7EjVPYvfH3LfazHA0vGVl13PujTZscNmE2Zbu6BcXMDDuYXQhBMVDavZ0v5-OnH_7doIH3hAtTNGJt6zJLuPCnGsHjU3MV-RY86GonHiE-ZWxyxi9X7lWtWOHAQPHOzy9USjBEQdIVtTvVIXDaCSRRXK5abtclcGvjkqpjBjhMP2yGNblQ94wJdCEd7zd-13VNezM6ySczTAVTgXm42r1UjfzX8k-VlIF_9SGlcdcZj3zgQM9DS4JPuPrzd746fBFvVZ7fNNCsiBPFwGAmBwNPwUzHUw'
    console.log(token1)
    var payload = "{\r\n    \"request\": {\r\n        \"filters\": {\r\n\r\n        },\r\n        \"fields\": [\r\n            \"profileDetails.personalDetails.firstname\",\r\n            \"profileDetails.personalDetails.lastname\",\r\n            \"profileDetails.personalDetails.primaryEmail\",\r\n\r\n            \"identifier\",\r\n            \"organisations\",\r\n            \"roles\",\r\n            \"firstName\",\r\n            \"lastName\",\r\n            \"email\"\r\n        ],\r\n        \"facets\": [],\r\n        \"sortBy\": {\r\n            \"createdDate\": \"Desc\"\r\n        },\r\n        \"limit\": 10000\r\n    }\r\n}"
    var headers = {
      'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5RVZPODkwNHZzV0pMdWhxanN6aVFLeEVZTFdZZ0MwSiJ9.0l5-vg_d_IHtNPfhp6l4OM-dmAG8azpV2amxDYLu110',
      'X-Authenticated-User-Token': token1,
      'Content-Type': 'application/json'
    }
    return this.http.post('/api/user/v1/search', payload, {headers});

  }
}
