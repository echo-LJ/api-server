module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      // eslint-disable-next-line sort-keys
      unique: true
    },
    password: DataTypes.STRING
  });

  return User;
};