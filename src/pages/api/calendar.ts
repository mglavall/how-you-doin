import prisma from "~/prisma";

export default async function handler(req, res) {
    const calendar = await prisma.moodCalendar.findMany();
    console.log(calendar);
    res.status(200).json({ data: "shit" });
}
