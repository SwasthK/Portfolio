import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        const cookieStore = cookies();
        const existingCookie = (await cookieStore).get("visitorId");

        if (!existingCookie) {
            const newVisitorId = crypto.randomUUID();
            await prisma.uniqueVisitor.create({
                data: {
                    visitorId: newVisitorId,
                    createdAt: new Date(),
                },
            });

            (await cookieStore).set("visitorId", newVisitorId, {
                maxAge: 60 * 60 * 24 * 365, // 1 year
                httpOnly: false,
            });

        }

        const uniqueVisitors = await prisma.uniqueVisitor.count();
        return NextResponse.json({ count: uniqueVisitors }, { status: 200 });

    } catch (error) {
        console.error("Error tracking unique users:", error);
        return NextResponse.json({ error: "Failed to track unique users" }, { status: 500 });
    }
}