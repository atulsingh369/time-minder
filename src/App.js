import { useState } from 'react';
import './App.css';

function App() {

	const [date, setDate] = useState("");

	const [years, setYears] = useState(0);
	const [months, setMonths] = useState(0);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const convert = () => {
		var newDate = date;
		newDate = newDate.split("-")
		newDate = new Date(newDate[0], newDate[1] - 1, newDate[2]).getTime();
		const today = new Date().getTime();
		var totTime = Math.floor(Math.abs(new Date(newDate) - new Date(today)) / 1000); // Total Diffrence Seconds

		var mnt = 0, yrs = 0, dys = 0, min = 0, hrs = 0;
		while (totTime) {
			if (totTime >= 31536000) {
				yrs++;
				setYears(yrs)
				totTime -= 31536000;
			}
			else if (totTime >= 2592000) {
				mnt++;
				setMonths(mnt)
				totTime -= 2592000;
			}
			else if (totTime >= 86400) {
				dys++;
				setDays(dys)
				totTime -= 86400;
			}
			else if (totTime >= 3600) {
				hrs++;
				setHours(hrs)
				totTime -= 3600;
			}
			else if (totTime >= 60) {
				min++;
				setMinutes(min)
				totTime -= 60;
			}
			else {
				setSeconds(totTime)
				break;
			}
		};
	}

	return (
		<>
			<div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-bl from-[#ff3cac] via-[#784ba0] to-[#2b86c5] text-white">
				<h1 className='md:text-5xl sm:text-5xl text-4xl font-bold bg-gradient-to-r from-[#ff6464] via-[#ffbf59] to-[#47c9ff] bg-[length:100%_5px] bg-no-repeat bg-bottom pb-2 md:pb-4'>
					Remaining Time
				</h1>

				<div className='lg:w-1/3 w-full text-3xl my-12 space-y-8'>
					<div className='flex justify-evenly w-full'>
						<p className='flex items-center space-y-3 flex-col'>
							<span>{years}</span>
							<span>YEARS</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>{months}</span>
							<span>MONTHS</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>{days}</span>
							<span>DAYS</span>
						</p>
					</div>

					<div className='flex justify-evenly w-full'>
						<p className='flex items-center space-y-3 flex-col'>
							<span>{hours}</span>
							<span>HOURS</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>{minutes}</span>
							<span>MINUTES</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>{seconds}</span>
							<span>SECONDS</span>
						</p>
					</div>
				</div>

				<div className="form-control">
					<label className='text-3xl flex justify-center' htmlFor='date'>Enter Date</label>
					<input
						id='date'
						className="input input-alt"
						placeholder="Enter Date"
						required=""
						value={date}
						onChange={(e) => { setDate(e.target.value); convert() }}
						type="date"
					/>
					<span className="input-border input-border-alt" />
				</div>


				<h1 className='md:text-4xl sm:text-4xl text-3xl mt-12 md:mt-48 break-words flex flex-wrap items-center justify-center font-semibold'>
					Built with 💗 by Atul
				</h1>

			</div>

		</>
	);
}

export default App;
