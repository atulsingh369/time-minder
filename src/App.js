import './App.css';

function App() {
	return (
		<>
			<div className="h-screen bg-gradient-to-bl from-[#ff3cac] via-[#784ba0] to-[#2b86c5] text-white">
				<h1 className='flex justify-center text-5xl font-semibold'>Remaining Time</h1>
				<div className="time">
					<div className="row">
						<p style={{ display: "flex", flexDirection: "column" }}>
							<span id="year" style={{ display: "flex", justifyContent: "center" }}>
								0
							</span>
							<span
								style={{ fontSize: "50%", display: "flex", justifyContent: "center" }}
							>
								YEARS
							</span>
						</p>
						<p style={{ display: "flex", flexDirection: "column" }}>
							<span id="month" style={{ display: "flex", justifyContent: "center" }}>
								0
							</span>
							<span
								style={{ fontSize: "50%", display: "flex", justifyContent: "center" }}
							>
								MONTHS
							</span>
						</p>
						<p style={{ display: "flex", flexDirection: "column" }}>
							<span id="day" style={{ display: "flex", justifyContent: "center" }}>
								0
							</span>
							<span
								style={{ fontSize: "50%", display: "flex", justifyContent: "center" }}
							>
								DAYS
							</span>
						</p>
					</div>
					<div className="row">
						<p style={{ display: "flex", flexDirection: "column" }}>
							<span id="hrs" style={{ display: "flex", justifyContent: "center" }}>
								0
							</span>
							<span
								style={{ fontSize: "50%", display: "flex", justifyContent: "center" }}
							>
								HOURS
							</span>
						</p>
						<p style={{ display: "flex", flexDirection: "column" }}>
							<span id="min" style={{ display: "flex", justifyContent: "center" }}>
								0
							</span>
							<span
								style={{ fontSize: "50%", display: "flex", justifyContent: "center" }}
							>
								MINUTES
							</span>
						</p>
						<p style={{ display: "flex", flexDirection: "column" }}>
							<span id="sec" style={{ display: "flex", justifyContent: "center" }}>
								0
							</span>
							<span
								style={{ fontSize: "50%", display: "flex", justifyContent: "center" }}
							>
								SECONDS
							</span>
						</p>
					</div>
				</div>
				<button onclick="input()" className="input">
					Enter Date
				</button>
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
