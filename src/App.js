import './App.css';

function App() {
	return (
		<>
			<div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-bl from-[#ff3cac] via-[#784ba0] to-[#2b86c5] text-white">
				<h1 className='text-5xl font-bold'>Remaining Time</h1>

				<div className='w-1/3 text-3xl my-12 space-y-8'>
					<div className='flex justify-evenly w-full'>
						<p className='flex items-center space-y-3 flex-col'>
							<span className=''>0</span>
							<span>YEARS</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>0</span>
							<span>MONTHS</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>0</span>
							<span>DAYS</span>
						</p>
					</div>

					<div className='flex justify-evenly w-full'>
						<p className='flex items-center space-y-3 flex-col'>
							<span className=''>0</span>
							<span>HOURS</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>0</span>
							<span>MINUTES</span>
						</p>
						<p className='flex items-center space-y-3 flex-col'>
							<span>0</span>
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
						type="date"
					/>
					<span className="input-border input-border-alt" />
				</div>



				<div style={{ position: "fixed", bottom: 10 }}>
					<h1
						style={{
							fontSize: "200%",
							overflowWrap: "break-word",
							wordWrap: "break-word",
							textAlign: "center",
							fontWeight: 600
						}}
					>
						Built with 💗 by Atul
					</h1>
				</div>
			</div>

		</>
	);
}

export default App;
