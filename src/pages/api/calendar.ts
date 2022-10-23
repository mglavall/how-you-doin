import prisma from "~/prisma";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const date = dayjs(req.body.date, "YYYY-MM-DD").utc(true).toDate();
        //Creates a mood for the day or updates it in case it exists already
        const m = await prisma.moodDay.upsert({ where: { date }, update: { rating: req.body.rating }, create: { moodCalendarId: 1, rating: req.body.rating, date } })
        res.status(200).json({ data: m });
        // Process a POST request
    } else {
        let day = dayjs().utc(true).subtract(8, 'month');
        const calendar = await prisma.moodCalendar.findFirst();
        const days = await prisma.moodDay.findMany({ where: { moodCalendarId: calendar.id } });
        let data = [];

        do {
            const sameDay = days.find((a) => dayjs.utc(a.date).isSame(day, "day"))

            if (sameDay) {
                console.log(day);
                console.log(dayjs(days[0].date));
                data.push({ ...sameDay, date: dayjs(sameDay.date).format("YYYY-MM-DD") })
            } else {
                data.push({ rating: null, date: day.format("YYYY-MM-DD") });
            }
            day = day.add(1, "day")

        } while (!day.isAfter(dayjs(), "day"))





        res.status(200).json({ data });
    }

}
