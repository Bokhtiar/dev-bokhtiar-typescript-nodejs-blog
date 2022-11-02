import { Schema, model } from "mongoose";
import { ITodo, ITodoCreateOrUpdated } from "../types/todo.types";

/**database filed create */
const TodoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});

export const Todo = model<ITodo>('Todo', TodoSchema);
