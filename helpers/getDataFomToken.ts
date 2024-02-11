import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export const getDataFromToken = (request: NextRequest) => {
    try {
        const TOKEN_SECRET = process.env.TOKEN_SECRET!
        const token = request.cookies.get('token')?.value || '';
        const decodedToken = jwt.verify(token, TOKEN_SECRET)

        return decodedToken.id
    } catch(error: any) {
        throw new Error(error.message)
    }
}