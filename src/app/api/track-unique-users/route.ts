import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const existingCookie = cookieStore.get("visitorId");

        if (!existingCookie) {
            const newVisitorId = crypto.randomUUID();

            await prisma.uniqueVisitor.create({
                data: {
                    visitorId: newVisitorId,
                    createdAt: new Date(),
                },
            });

            const res = NextResponse.json({ message: "New visitor tracked" });
            res.cookies.set("visitorId", newVisitorId, {
                maxAge: 60 * 60 * 24 * 365,
                httpOnly: false,
            });

            return res;
        }

        const uniqueVisitors = await prisma.uniqueVisitor.count();
        return NextResponse.json({ count: uniqueVisitors }, { status: 200 });

    } catch (error) {
        console.error("Error tracking unique users:", error);
        return NextResponse.json({ error: "Failed to track unique users" }, { status: 500 });
    }
}
