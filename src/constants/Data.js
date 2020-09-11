const plotOptions = {
	series: {  
		animation:{
			duration: 5000
		}
	}
};

const categories= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const labels= {
	style: {
		fontSize:'20px'
	}
}
const marker= {
	symbol: 'circle',
	}
const tooltip = {
	valueSuffix: '\xB0C'
}

const chartData = [
	{
		name: "Sweden",
		data: [1.0, 3.9, 4.5, 6.5, 13.2, 15.5, 19.2,26.5, 23.3, 18.3, 13.9, 9.6],
		marker: {marker}		
	},
	{
		name: "Germany",
		data: [5.0, 6.9, 8.5, 9.5, 10.2, 11.5, 21.2, 20.5, 23.3, 18.3, 13.9, 9.6],
		marker: {marker},		
	},
	{
		name: "Georgia",
		data: [13.0, 15.9, 14.5, 16.5, 12.2, 11.5, 10.2, 9.5, 5.3, 2.3, 1.9, -7.6],
		marker: {marker},		
	},
	{
		name: "France",
		data: [-4.0, 1.9, 3.5, 2.5, 4.2, 4.5, 5.2, 6.5, 3.3, 2.0, 1.0, -3.6],
		marker: {marker},		
	},
	{
		name: "Florida",
		data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0], 
		marker: {marker},		
	},
	{
		name: "Atlanta",
		data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
		marker: {marker},		
	},
	{
		name: "Columbus",
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6],
		marker: {marker},		
	},
]

export {
	plotOptions, 
	categories,
	chartData,
	labels,
	marker,
	tooltip
}