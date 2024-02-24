import FormModel from "../Models/formModel.js";

//! GET
export const homeRoute = async (req, res) => {
  try {
    await FormModel.find({}).then((data) => {
      res.render("index.ejs", {
        title: "Workino",
        data,
      });
    });
  } catch (error) {
    if (error) throw error;
    res.json({
      message: "Unable to get data, read the error and try to fix it!",
      error,
    });
  }
};

//! GET
export const getAllData = async (req, res) => {
  await FormModel.find({}).then((data) => {
    res.json({ message: "All Data", data });
  });
};

//! POST
export const postAllData = async (req, res) => {
  const { token } = req.body;
  try {
    if (token === process.env.TOKEN) {
      const getData = await FormModel.find({});
      res.status(201).json({
        message: "Customers Data",
        data: getData,
      });
    } else {
      res.status(401).json({ message: "SORRY!, you are a unauthorized person" });
    }
  } catch (error) {
    if (error) throw error;
    res.status(404).json({
      message: "SORRY!, internal problem have a look at error",
      err: error,
    });
  }
};

//! GET - BY ID
export const getDataByID = async (req, res) => {
  const { id } = req.params;

  try {
  } catch (error) {
    if (error) throw error;
    res.status(404).json("SORRY!, you got some error");
  }
  const oneData = await FormModel.find({
    _id: id,
  });

  res.json({
    message: "One Data",
    data: oneData,
  });
};

//! POST
export const mainPostData = async (req, res) => {
  const formData = req.body;
  try {
    const data = await FormModel(formData);
    const saveData = await data.save();

    res.status(201).json({
      message: "Data added to database successfully",
      data: saveData,
    });
  } catch (error) {
    if (error) throw error;
  }
};

//! DELETE
export const deleteAll = async (req, res) => {
  try {
    await FormModel.deleteMany({});
    res.status(204).json("DELETED! All data successfully");
  } catch (error) {
    if (err) throw err;
  }
};

//! DELETE - BY ID
export const deleteByID = async (req, res) => {
  const { id } = req.params;

  try {
    await FormModel.deleteOne({ _id: id }).then((data) => {
      res.status(204).json({ message: "Data deleted successfully", data });
    });
  } catch (error) {
    if (error) throw error;
    res.status(404).json({
      message: "SORRY!, we are not able to delete your data",
      error,
    });
  }
};

//! UPDATE
export const updateByID = async (req, res) => {
  const { id } = req.params;

  try {
    await FormModel.findOneAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        address: req.body.address,
        category: req.body.category,
        preferredTime: req.body.preferredTime,
      }
    ).then(async (updated) => {
      await updated.save();
      res.status(200).json({
        message: "UPDATED! your data is updated successfully!",
        beforeUpdate: updated,
        afterUpdate: await FormModel.findOne({ _id: id }),
      });
    });
  } catch (error) {
    if (error) throw error;
    res.status(404).json({
      message: "SORRY!, we are unable to update your data, read the error",
      error,
    });
  }
};
