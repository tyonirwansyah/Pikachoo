import {
  getModelForClass,
  prop,
  index,
  modelOptions,
} from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    collection: 'user',
  },
})
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
