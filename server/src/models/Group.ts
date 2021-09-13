import {
  getModelForClass,
  index,
  modelOptions,
  prop,
} from '@typegoose/typegoose';
import { UserSchema } from './User';

@modelOptions({ options: { allowMixed: 1 } })
@index({ unique: 1, _id: 1 })
class Group {
  @prop({ required: true, type: String })
  public name?: string;

  @prop({ required: true, type: UserSchema })
  public owner?: UserSchema;

  @prop({ required: true, type: [UserSchema], default: [] })
  public users?: UserSchema[];
}

const GroupModel = getModelForClass(Group);

export default GroupModel;
