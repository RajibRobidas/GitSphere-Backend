import mongoose from "mongoose";
import Repository from "../models/repoModel.js";
import User from "../models/userModel.js";
import Issue from "../models/issueModel.js";

const createIssue = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  try {
    const issue = new Issue({
      title,
      description,
      repository: id,
    });

    await issue.save();

    res.status(201).json(issue);
  } catch (err) {
    console.error("Error during issue creation : ", err.message);
    res.status(500).send("Server error!");
  }
};

const updateIssueById = async (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.params;

  try {
    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({ error: "issue not found!" });
    }

    issue.title = title;
    issue.description = description;
    issue.status = status;

    const updatedIssue = await issue.save();

    res.json({
      message: "Issue updated!",
      issue: updatedIssue,
    });
  } catch (err) {
    console.error("Error during issue updation : ", err.message);
    res.status(500).send("Server error!");
  }
};

const deleteIssueById = async (req, res) => {
  const { id } = req.params;

  try {
    const issue = await Issue.findByIdAndDelete(id);

    if (!issue) {
      return res.status(404).json({ error: "issue not found!" });
    }
    res.json({
      message: "Issue deleted!",
    });
  } catch (err) {
    console.error("Error during issue deletion : ", err.message);
    res.status(500).send("Server error!");
  }
};

const getAllIssues = async (req, res) => {
  const { id } = req.params;

  try {
    const issues = await Issue.find({ repository: id });

    if (!issues) {
      return res.status(404).json({ error: "issues not found!" });
    }
    res.status(200).json(issues);
  } catch (err) {
    console.error("Error during issue fetching : ", err.message);
    res.status(500).send("Server error!");
  }
};

const getIssueById = async (req, res) => {
  const { id } = req.params;

  try {
    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({ error: "issue not found!" });
    }

    res.json(issue);
  } catch (err) {
    console.error("Error during issue fetching : ", err.message);
    res.status(500).send("Server error!");
  }
};

export {
  createIssue,
  updateIssueById,
  deleteIssueById,
  getAllIssues,
  getIssueById,
};
