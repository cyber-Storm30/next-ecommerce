import mongoose, { model, models, Schema } from "mongoose";

const UserDetailsSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const UserDetails =
  models?.UserDetails || model("UserDetails", UserDetailsSchema);
