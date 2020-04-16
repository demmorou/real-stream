import { Model, DataTypes } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import database from '../../config/database';

class User extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public password!: string;
  public passwordHash!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'users',
    sequelize: database,
  },
);

User.beforeSave(async (user) => {
  if (user.password) {
    user.passwordHash = await bcrypt.hash(user.password, 6);
  }
});

User.sync({ force: true })
  .then(() => {
    console.log('Users table has created');
  })
  .catch((err) => {
    console.log('error: ', err);
  });

export default User;
