exports.submitReport = async (req, res) => {
  try {
     const result = await controller.createModel(req, res);
     res.json({ message: "Report submitted successfully!", data: result });
  } catch (err) {
     res.status(500).json({ message: err.message });
  }
 };
exports.getReports = (req, res) => {
  const { userId } = req.params;

  const userReports = reports.find((report) => report.userId === userId);

  if (userReports) {
    res.json(userReports.reportData);
  } else {
    res.status(404).json({ message: "No reports found for the user." });
  }
};
exports.createModel = async (req, res) => {
  const newModel = new MyModel(req.body);
 
  try {
     const savedModel = await newModel.save();
     res.status(200).json(savedModel);
  } catch (err) {
     res.status(500).json({ message: err.message });
  }
 };
