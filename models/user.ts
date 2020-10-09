import mongoose from 'mongoose';

// スキーマを定義
const { Schema } = mongoose;

const User = new Schema({
  name: String,
  age: Number,
});

// モデルを作成
const userModel = mongoose.model('User', User);

export default userModel;
