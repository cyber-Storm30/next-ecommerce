import mongoose, { model, models, Schema } from "mongoose";

const MenuItemSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    desc: { type: String },
    category: { type: [] },
    basePrice: { type: Number },
    sizes: { type: [] },
  },
  { timestamps: true }
);

export const MenuItem = models?.MenuItem || model("MenuItem", MenuItemSchema);
