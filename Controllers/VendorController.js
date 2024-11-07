const db = require("../Connections/DBConnection");


// Add Vendor

const Add = async (req, res) => {
  const value = [req.body.name, req.body.number];
  try {
    const sql = "INSERT INTO Vendor(`Name`,`Number`) VALUES(?,?)";
    db.query(sql, value, (err, result) => {
      if (err) {
        return res.status(200).json({ return: false, message: err });
      } else {
        return res.status(200).json({
          return: true,
          message: "Vendor Added Successful",
          data: result,
        });
      }
    });
  } catch (error) {
    return res.status(200).json({ return: false, message: error });
  }
};

// Fetch all Vendor

const Fetch = (req,res) => {
  try {
    const sql = "SELECT * FROM Vendor ORDER BY ID DESC"
    db.query(sql, (err,result) => {
      if(err){
        res.status(200).json({return:false,message:err})
      }else{
        return res.status(200).json({return:true,message:'Vendor Fetch Successful',data:result})
      }
    })
  } catch (error) {
    
  }
}

module.exports = { Add ,Fetch};
