import request from "supertest";
import app from "../../../src/main/config/app";

describe("Content type middleware", () => {
  test("Should return default content type as json", async () => {
    app.get("/content_type_test", (req, res) => {
      res.send("");
    });

    await request(app).get("/content_type_test").expect("content-type", /json/);
  });

  test("Should return xml content type when forced", async () => {
    app.get("/content_type_test_xml", (req, res) => {
      res.type("xml");
      res.send("");
    });
    await request(app)
      .get("/content_type_test_xml")
      .expect("content-type", /xml/);
  });
});
