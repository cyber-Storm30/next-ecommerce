import dbConnect from "@/lib/mongoConnect";
import { MenuItem } from "@/models/MenuItem";

export const GET = async (req: any) => {
  try {
    await dbConnect();
    const url = req.url;
    const params = url.split("/");
    const id = params[params.length - 1];
    const data = await MenuItem.findById(id);
    return Response.json(data);
  } catch (err) {
    return Response.json(err);
  }
};
