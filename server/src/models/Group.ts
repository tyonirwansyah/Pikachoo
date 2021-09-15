import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { UserSchema } from './User';
import mongoose from 'mongoose';

@modelOptions({
  schemaOptions: {
    collection: 'group',
  },
})
class GroupSchema {
  @prop({ required: true, type: String })
  public name?: string;

  @prop({
    required: true,
    type: mongoose.Types.ObjectId,
    ref: () => UserSchema,
  })
  public owner?: UserSchema;

  @prop({
    required: true,
    type: mongoose.Types.ObjectId,
    default: [],
    ref: () => UserSchema,
  })
  public members?: UserSchema[];
}

const GroupModel = getModelForClass(GroupSchema);
export default GroupModel;
