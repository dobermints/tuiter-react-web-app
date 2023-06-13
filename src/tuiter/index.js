const store = configureStore({
	reducer: {
		who: whoReducer,
		tuits: tuitsReducer,
	},
});


function Tuiter() {
	return (
		<div>
			<h1>Tuiter</h1>
		</div>
	);
}
export default Tuiter;
