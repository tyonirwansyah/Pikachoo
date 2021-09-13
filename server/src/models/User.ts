import { getModelForClass, prop, index } from '@typegoose/typegoose';

@index({ unique: 1, _id: 1 })
export class UserSchema {
  @prop({ required: true, type: String })
  public username?: string;

  @prop({ type: String })
  public profilePicture?: string;

  @prop({ type: String })
  public description?: string;
}

const UserModel = getModelForClass(UserSchema);

export default UserModel;
