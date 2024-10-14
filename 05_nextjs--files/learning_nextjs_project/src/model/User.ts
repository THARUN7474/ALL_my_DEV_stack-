import mongoose, {Schema,Document} from "mongoose";

// Define the user schema
export interface Message extends Document {
    content: string;
    createdAt: Date
}


