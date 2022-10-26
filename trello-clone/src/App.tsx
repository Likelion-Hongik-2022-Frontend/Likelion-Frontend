import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from './atom';

function App() {
	const [minutes, setMinutes] = useRecoilState(minuteState);
	const [hours, setHours] = useRecoilState(hourSelector);
	const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
		setMinutes(parseInt(event.currentTarget.value));
	};
	const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
		setHours(parseInt(event.currentTarget.value));
	};
	return (
		<div>
			<input value={minutes} onChange={onMinutesChange} type='number' placeholder='Minutes' />
			<input value={hours} onChange={onHoursChange} type='number' placeholder='Hours' />
		</div>
	);
}
export default App;
