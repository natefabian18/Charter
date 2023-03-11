<script lang="ts">
	import {onMount} from 'svelte';

	let chart: HTMLCanvasElement;
	async function populateData() {
		let res = await fetch('/api');
		let apiData = await res.json();
		console.log(apiData);

		let completed = apiData.data.map(item => item.completed);
		let total = apiData.data.map(item => item.total);

		//@ts-ignore
		new Chart(chart, {
			type: 'line',
			data: {
				labels: [1,2,3,4,5,6,7,8,9,10],
				datasets: [
					{
						label: 'Completed',
						data: completed,
						fill: true,
						borderColor: 'rgb(75,192,192)',
						tension: 0.1
					},
					{
						label: 'total',
						data: total,
						fill: true,
						borderColor: 'rgb(75,255,192)',
						tension: 0.1
					}
				]
			},
			responsive: true,
			interaction: {
				mode: 'nearest',
				axis: 'x',
				intersect: false
			},
		})


	}

	onMount(()=>{
		populateData();
	})
</script>

<style>
	.Container {
		display: grid;
		width: 100vw;
		min-height: 100vh;
		place-items: center;
	}

	.ChartHolder {
		width: 70% !important;
	}
</style>

<div class="Container">
	<h1>Welcome to demo data</h1>

	<div class="ChartHolder">
		<canvas bind:this={chart} />
	</div>
</div>