import { MongoClient } from "../deps.ts";
import { Product } from "../types/product.type.ts";

const client = new MongoClient();

try {
    await client.connect("mongodb+srv://chbam:K8FbZj54Ewk1oQ32@chbam.dcdctah.mongodb.net/?retryWrites=true&w=majority");
    console.log("Conectados a MongoDB Atlas");
} catch (error) {
    console.log(error);
}

const db = client.database('deno');

export const products = db.collection<Product>('products');