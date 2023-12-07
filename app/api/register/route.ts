import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = () => {
    try {
        connect()
        return NextResponse.json({msg:'ok'},{status:200})
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({msg:'error'},{status:500})
    }
}