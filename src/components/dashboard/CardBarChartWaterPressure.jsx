'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// MUI X Charts Imports
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis'

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)'
    }
  ],
  series: [{ dataKey: 'seoul', label: 'Seoul rainfall' }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)'
    }
  }
}

const dataset = [
  { month: 'Jan', seoul: 50 },
  { month: 'Feb', seoul: 75 },
  { month: 'Mar', seoul: 45 },
  { month: 'Apr', seoul: 60 },
  { month: 'May', seoul: 80 },
  { month: 'Jun', seoul: 85 },
  { month: 'Jul', seoul: 95 },
  { month: 'Aug', seoul: 70 },
  { month: 'Sep', seoul: 85 },
  { month: 'Oct', seoul: 60 },
  { month: 'Nov', seoul: 55 },
  { month: 'Dec', seoul: 65 }
]

const CardBarChartWaterPressure = () => {
  return (
    <Card>
      <CardHeader title='อัตราการไหลน้ำวันนี้' className='mb-5' />
      <CardContent className='flex flex-col justify-center items-center'>
        {/* Bar Chart for Water Flow */}
        <BarChart dataset={dataset} xAxis={[{ scaleType: 'band', dataKey: 'month' }]} {...chartSetting} />
      </CardContent>
    </Card>
  )
}

export default CardBarChartWaterPressure
