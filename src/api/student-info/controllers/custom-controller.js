"use strict";
//@ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::student-info.student-info",
  ({ strapi }) => ({
    // Test Api Endpoint
    async testApi(ctx) {
      (ctx.body = "Hello World"), (ctx.status = 200);
    },

    // Get all student info list
    async getAllStudentList(ctx) {
      try {
        const result = await strapi
          .documents("api::student-info.student-info")
          .findMany();

        if (result) {
          return (ctx.body = result);
        }
      } catch (err) {
        return ctx.badRequest(err.message.err);
      }
    },

    // Get single student details

    // Create student info
    async createStudent(ctx) {
      try {
        let {
          studentno,
          lastname,
          firstname,
          middlename,
          course,
          section,
          age,
          gender,
        } = ctx.request.body;

        const result = await strapi
          .documents("api::student-info.student-info")
          .create({
            data: {
              student_no: studentno,
              last_name: lastname,
              first_name: firstname,
              middle_name: middlename,
              course: course,
              section: section,
              age: age,
              gender: gender,
            },
          });

        if (result) {
          return (ctx.body = result);
        }
      } catch (err) {
        return ctx.badRequest(err.message.err);
      }
    },

    // Update student info
    async updateStudent(ctx) {
      try {
        let { documentid } = ctx.params;
        let {
          studentno,
          lastname,
          firstname,
          middlename,
          course,
          section,
          age,
          gender,
        } = ctx.request.body;

        const result = await strapi
          .documents("api::student-info.student-info")
          .update({
            documentId: documentid,
            data: {
              student_no: studentno,
              last_name: lastname,
              first_name: firstname,
              middle_name: middlename,
              course: course,
              section: section,
              age: age,
              gender: gender,
            },
          });

        if (result) {
          return (ctx.body = result);
        }
      } catch (err) {
        return ctx.badRequest(err.message.err);
      }
    },

    // Delete student info
  })
);
