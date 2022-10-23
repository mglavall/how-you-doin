import prisma from "~/prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const startOfDay = dayjs(req.body.date).utc().startOf("day").toDate();
        //Creates a mood for the day or updates it in case it exists already
        const m = await prisma.moodDay.upsert({ where: { date: startOfDay }, update: { rating: req.body.rating }, create: { moodCalendarId: 1, rating: req.body.rating, date: startOfDay } })
        res.status(200).json({ data: m });
        // Process a POST request
    } else {
        let day = dayjs().subtract(8, 'month').utc();
        const calendar = await prisma.moodCalendar.findFirst();
        const days = await prisma.moodDay.findMany({ where: { moodCalendarId: calendar.id } });
        let data = [];

        do {
            const sameDay = days.find((a) => dayjs(a.date).isSame(day, "day"))

            if (sameDay) {
                data.push({ ...sameDay, date: dayjs(sameDay.date).format("YYYY-MM-DD") })
            } else {
                data.push({ rating: null, date: day.format("YYYY-MM-DD") });
            }
            day = day.add(1, "day")

        } while (!day.isAfter(dayjs(), "day"))





        res.status(200).json({ data });
    }

}
