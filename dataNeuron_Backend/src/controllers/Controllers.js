const Crudmodel = require("../models/models");

let addCount = 0;
let updateCount = 0;
const Get = async (req, res) => {
  try {
    const data = await Crudmodel.find({});

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Add = async (req, res) => {
  try {
    const savedata = await new Crudmodel(req.body);
    savedata.save();
    addCount++;
    res.status(200).send("data saved");
  } catch (err) {
    res.status(500).send(err);
  }
};

const Update = async (req, res) => {
  try {
    const updateddata = await Crudmodel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    updateCount++;
    res.status(200).send(updateddata);
  } catch (err) {
    res.status(500).send(err);
  }
};

const Count = (req, res) => {
  try {
    res.status(200).json({ addCount, updateCount });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { Add, Get, Update, Count };
