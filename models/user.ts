import mongoose from 'mongoose';

// インターフェースを定義
interface UserDocument extends mongoose.Document {
  name: String;
  age: Number;
}

// スキーマを定義
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  age: Number,
});

// モデルを定義
const User: mongoose.Model<UserDocument> = mongoose.model('User', UserSchema);

export default User;
