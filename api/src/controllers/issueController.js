import issue from "../models/Issue.js";

class IssueController {
  static async listAll(req, res) {
    try {
      const issues = await issue.find({});

      if (issues.length > 0) {
        res.status(200).json(issues);
      } else {
        res.status(204).json(issues);
      };
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to list all issues.`});
    };
  };

  static async findById(req, res) {
    try {
      const id = req.params.id;
      const issueById = await issue.findById(id);
      res.status(200).json(issueById);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to find issue by id.`})
    };
  };

  static async create(req, res) {
    try {
      const newIssue = await issue.create(req.body);
      res.status(201).json({
        message: "Issue successfully created.",
        issue: newIssue,
      });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to create new issue.`})
    };
  };

  static async updateById(req, res) {
    try {
      const id = req.params.id;
      await issue.findByIdAndUpdate(id);
      res.status(200).json({ message: "Issue successfully updated." });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to update issue by id.` });
    };
  };

  static async deleteById(req, res) {
    try {
      const id = req.params.id;
      await issue.findByIdAndDelete(id);
      res.status(204).json({ message: "Issue successfully deleted." });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to delete issue by id.` });
    };
  };
};

export default IssueController;
