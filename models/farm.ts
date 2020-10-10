import mongoose from 'mongoose';

// インターフェースの定義 (TypeScript)
interface Contribution {
  date: number;
  description: string;
}

interface FarmDocument extends mongoose.Document {
  author: string;
  title: string;
  contributions: Contribution[];
}

// スキーマの定義 (mongoose)
const { Schema } = mongoose;

const FarmSchema = new Schema({
  author: String,
  title: String,
  contributions: Array,
})

// モデルの定義 (mongoose)
const Farm: mongoose.Model<FarmDocument> = mongoose.model('Farm', FarmSchema);

export default Farm;
