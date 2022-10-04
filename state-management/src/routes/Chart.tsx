import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

interface IHistorical {
	time_open: string;
	time_close: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;
	market_cap: number;
}

interface CharProps {
	coinId: string;
}

function Chart({ coinId }: CharProps) {
	const isDark = useRecoilValue(isDarkAtom);
	const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId));
	return (
		<div>
			{isLoading ? (
				'Loading chart...'
			) : (
				<ApexChart
					type='line'
					series={[{ name: 'Price', data: data?.map((price) => price.close) ?? [] }]}
					options={{
						theme: { mode: isDark ? 'dark' : 'light' },
						chart: { height: 300, width: 500, toolbar: { show: false }, background: 'transparent' },
						grid: { show: false },
						stroke: { curve: 'smooth', width: 4 },
						yaxis: {
							show: false
						},
						xaxis: {
							axisBorder: { show: false },
							axisTicks: { show: false },
							labels: { show: false },
							type: 'datetime',
							categories: data?.map((price) => new Date(price.time_close * 1000).toISOString())
						},
						fill: {
							type: 'gradient',
							gradient: { gradientToColors: ['#0be881'], stops: [0, 100] }
						},
						colors: ['#0fbcf9'],
						tooltip: {
							y: {
								formatter: (value) => `$ ${value.toFixed(2)} `
							}
						}
					}}
				/>
			)}
		</div>
	);
}

export default Chart;
