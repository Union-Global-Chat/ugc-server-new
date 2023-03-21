import { DataTypes, Sequelize } from "sequelize";


export default (sequelize: Sequelize) => {
  return (
    sequelize.define("Message", {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      clean_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reference_channel_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reference_guild_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reference_message_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    })
  )
}