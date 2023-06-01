const db = require("../models");
const mavlinkdata = db.mav;

exports.dumpdata = (req, res) => {
  // Save User to Database
  mavlinkdata.create({
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    speed: req.body.speed,
    altitude: req.body.altitude,
    bearing: req.body.bearing,
    yaw: req.body.yaw,
    pitch: req.body.pitch,
    roll: req.body.roll,
    ibatt: req.body.ibatt,
    timeflight: req.body.timeflight,
  });
  res.send({ message: "Dump Success!" });
  // .then((user) => {
  //   if (req.body.roles) {
  //     Role.findAll({
  //       where: {
  //         name: {
  //           [Op.or]: req.body.roles,
  //         },
  //       },
  //     }).then((roles) => {
  //       user.setRoles(roles).then(() => {
  //         res.send({ message: "User was registered successfully!" });
  //       });
  //     });
  //   } else {
  //     // user role = 1
  //     user.setRoles([1]).then(() => {
  //       res.send({ message: "User was registered successfully!" });
  //     });
  //   }
  // })
  // .catch((err) => {
  //   res.status(500).send({ message: err.message });
  // });
};
