module.exports = (sequelize, Sequelize) => {
  const MavData = sequelize.define("mavlinkdata", {
    longitude: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
    },
    speed: {
      type: Sequelize.STRING,
    },
    altitude: {
      type: Sequelize.STRING,
    },
    bearing: {
      type: Sequelize.STRING,
    },
    yaw: {
      type: Sequelize.STRING,
    },
    pitch: {
      type: Sequelize.STRING,
    },
    roll: {
      type: Sequelize.STRING,
    },
    ibatt: {
      type: Sequelize.STRING,
    },
    timeflight: {
      type: Sequelize.STRING,
    },
  });

  return MavData;
};
