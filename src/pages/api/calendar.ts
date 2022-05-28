import prisma from "~/prisma";
import dayjs from "dayjs";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("h");
        console.log(req.body.date);
        const startOfDay = dayjs(req.body.date).startOf("day").toDate();
        //Creates a mood for the day or updates it in case it exists already
        const m = await prisma.moodDay.upsert({ where: { date: startOfDay }, update: { rating: req.body.rating }, create: { moodCalendarId: 1, rating: req.body.rating, date: startOfDay } })
        res.status(200).json({ data: m });
        // Process a POST request
    } else {
        const calendar = await prisma.moodCalendar.findFirst();
        const days = await prisma.moodDay.findMany({ where: { moodCalendarId: calendar.id } })

        res.status(200).json({ data: days });
    }

}
