import Header1 from "../addProperty/Header1.jsx";
import Calendar from "react-calendar";
import useDateStore from "../../../application/state/tourism/useDateStore.jsx";

const Calender = () => {
    const {date, highlightedDays, setDate, setYear} = useDateStore();

    const toggleDate = (date) => {
        setYear(date.getFullYear());
        setDate(date);
    };

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <Header1 title={"جدول الحجوزات"} align={"right"}/>
            <Calendar
                onClickYear={(date) => toggleDate(date)}
                onChange={setDate}
                minDetail="decade"
                defaultView="year"
                value={date}
                formatShortWeekday={(locale, date) =>
                    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][(date.getDay() + 6) % 7]}
                tileClassName={({date}) => {
                    return highlightedDays.find(d => d.toDateString() === date.toDateString())
                        ? 'highlighted'
                        : null;
                }}
                nextLabel={null}
                next2Label={null}
                prevLabel={null}
                prev2Label={null}
            />

        </div>
    )
}
export default Calender
