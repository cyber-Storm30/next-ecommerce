import dbConnect from "@/lib/mongoConnect";
import { MenuItem } from "@/models/MenuItem";

export const POST = async (req: any) => {
  try {
    // FIXME:fix something
    await dbConnect();
    const data = await req.json();
    const menuItem = await MenuItem.create(data);
    return Response.json(menuItem);
  } catch (err) {
    console.log(err);
    return Response.json(err);
  }
};

export const GET = async (req: any) => {
  try {
    //TODO:optimise the code
    await dbConnect();
    const url = req.url;
    const query = url.split("=")[1];

    if (query) {
      const data = await MenuItem.find({ category: query });
      return Response.json(data);
    }
    const data = await MenuItem.find();
    return Response.json(data);
  } catch (err) {
    return Response.json(err);
  }
};
