import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {Category} from "@/models/Category";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    // Establece la conexión a la base de datos
    mongoose.connect(process.env.MONGO_URL);
    
    // Imprime los datos recibidos desde el cliente
    const { name } = await req.json();
    console.log("Datos recibidos desde el cliente:", name);
    
    // Intenta crear la categoría en la base de datos
    const categoryDoc = await Category.create({ name });
    console.log("Categoría creada en la base de datos:", categoryDoc);
    
    // Retorna la categoría creada como respuesta
    return Response.json(categoryDoc);
  } catch (error) {
    // Maneja cualquier error que ocurra durante el proceso
    console.error("Error al crear la categoría:", error);
    return Response.json({ error: "Error al crear la categoría" }, { status: 500 });
  }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const {_id, name} = await req.json();
  if (await isAdmin()) {
    await Category.updateOne({_id}, {name});
  }
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(
    await Category.find()
  );
}

export async function DELETE(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    console.log("ID de la categoría a eliminar:", _id);

    if (await isAdmin()) {
      await Category.deleteOne({ _id });
      console.log("Categoría eliminada correctamente");
      return Response.json({ success: true });
    } else {
      console.log("El usuario no es un administrador");
      return Response.json({ success: false, error: "Usuario no autorizado" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    return Response.json({ success: false, error: "Error al eliminar la categoría" }, { status: 500 });
  }
}