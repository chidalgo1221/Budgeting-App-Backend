const transactions = require("express").Router();
const dataBaseArr = require("../models/dataBase");

transactions.post("/", (req, res) => {
    const { body } = req;
    dataBaseArr.push(body);
    const newData = dataBaseArr.length - 1;
    res.json(dataBaseArr[newData]);
  });


transactions.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    dataBaseArr[id] = body;
    res.json(dataBaseArr[id]);
  });


  transactions.delete("/:id", (req, res) => {
    const deletedInfo = dataBaseArr.splice(req.params.id, 1);
    res.json(deletedInfo[0]);
  });

transactions.get("/:id", (req, res) => {
    const data = dataBaseArr[req.params.id];
    if (data) {
      res.json(data);
    } else {
      res.redirect("/404");
    }
  });
  transactions.get("/", (req, res) => {
    res.json(dataBaseArr);
  });

  module.exports = transactions;