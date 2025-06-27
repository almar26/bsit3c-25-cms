"use strict"

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/student-info/test",
            handler: "custom-controller.testApi"
        },
        {
            method: "GET",
            path: "/student-info/list",
            handler: "custom-controller.getAllStudentList"
        },
        {
            method: "POST",
            path: "/student-info/create",
            handler: "custom-controller.createStudent"
        },
        {
            method: "PUT",
            path: "/student-info/update/:documentid",
            handler: "custom-controller.updateStudent"
        }
    ]
}