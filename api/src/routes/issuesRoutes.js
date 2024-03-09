import express from "express";
import IssueController from "../controllers/issueController.js";

const routes = express.Router();

routes.get("/issues", IssueController.listAll);
routes.get("/issues/:id", IssueController.findById);
routes.post("/issues", IssueController.create);
routes.put("/issues", IssueController.updateById);
routes.delete("/issues", IssueController.deleteById);

export default routes;
