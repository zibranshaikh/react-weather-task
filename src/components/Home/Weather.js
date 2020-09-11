import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, SplineSeries
} from 'react-jsx-highcharts';

import { 	
	plotOptions, 
	categories,
	chartData,
	labels,
	marker,
	tooltip 
} from '../../constants/Data'

import { CardLoader } from '../../common/components/LoadingSpinner';

import './Weather.css';

//Weather component for maintain Weather.
const Weather = (props) => {

	const [showChart, setShowChart] = useState(false);
	const [isDataLoading, setDataLoading] = useState(false)
	
	//Function for get Weather Chart.
	const getWeatherChart = async () => {
		setDataLoading(true)
		setTimeout(() => {
			setDataLoading(false)		
			setShowChart(true);
		}, 10000)
	};

	//Hooks for Load Chart
	useEffect(() => {
			getWeatherChart();
	},[]);
	
	const renderWeatherChart = () => {
		return (
			<div className="weather-chart">
				<HighchartsChart 
					plotOptions={plotOptions} 
					tooltip={tooltip} 
					marginLeft={300}
				>
					<Chart height={500}/>
					<Title 
						align='center'>
						Weather Report
					</Title>
					<XAxis categories={categories} label = {labels}>
						<XAxis.Title >Time</XAxis.Title>
					</XAxis>
					<Legend 
						layout="horizontal" 
						align="right" 
						verticalAlign='top' 
						borderWidth={0}
						symbolRadius={0} 
						symbolWidth={5}
					/>
					<YAxis>
						<YAxis.Title >{'Temperature (\xB0C)'}</YAxis.Title>
						{chartData.map(item => (
							<SplineSeries 
								name= {item.name}
								data= {item.data}
								marker= {item.marker}
							/>	
						))}
					</YAxis>
				</HighchartsChart>
			</div>
		);
	}

	return (
		<>
			<div className="Weatherec page-top">
			<Card body className="bodyCard border-top-0">
				{isDataLoading ? 
					<>
						<div>Weather Report Loading...</div>
						<CardLoader /> 
					</>
				: 
					showChart ? renderWeatherChart() : null
				}
			</Card>
			</div>
		</>
	);
};

export default withHighcharts(Weather, Highcharts);