import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
    try {
        const results=await conn.query("SELECT * FROM tabla");
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(
            {message:error.message},
            {status:500}
        );
    }
}
export async function POST(request) {
    try {
        const { name, address, description, price,estado } = await request.json();
        const result = await conn.query("INSERT INTO tabla SET ?", {
            name,
            address,
            description,
            price,
            estado
        });
        return NextResponse.json({
            name,
            address,
            description,
            price,
            estado,
            id: result.insertId
        });
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}