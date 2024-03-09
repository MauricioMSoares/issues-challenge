import express from "express";
import issues from "./issuesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Issues API");
  });

  app.use(express.json(), issues);
};

export default routes;
