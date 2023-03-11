import {error} from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	
	let data = {
		startDate: new Date("03/01/2023"),
		endDate: new Date("03/10/2023"),
		data: [
			{total: 100, completed: 10},
			{total: 100, completed: 15},
			{total: 100, completed: 30},
			{total: 100, completed: 50},
			{total: 100, completed: 80},
			{total: 110, completed: 85},
			{total: 110, completed: 90},
			{total: 110, completed: 91},
			{total: 110, completed: 92},
			{total: 115, completed: 93}
		]
	}
   
	return new Response(JSON.stringify(data));
  }