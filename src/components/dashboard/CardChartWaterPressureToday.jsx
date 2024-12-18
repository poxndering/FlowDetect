'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// MUI X Charts Imports
import { GaugeContainer, GaugeValueArc, GaugeReferenceArc, useGaugeState } from '@mui/x-charts/Gauge'

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState()

  if (valueAngle === null) {
    // No value to display
    return null
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle)
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill='red' />
      <path d={`M ${cx} ${cy} L ${target.x} ${target.y}`} stroke='red' strokeWidth={3} />
    </g>
  )
}

const CardChartWaterPressureToday = () => {
  const maxValue = 100
  const currentValue = 30

  return (
    <Card>
      <CardHeader title='แรงดันน้ำวันนี้' className='mb-5' />
      <CardContent className='flex flex-col justify-center items-center'>
        <GaugeContainer width={200} height={200} startAngle={-110} endAngle={110} value={currentValue}>
          <GaugeReferenceArc />
          <GaugeValueArc />
          <GaugePointer />
        </GaugeContainer>
        <div className='mt-4 text-lg'>
          <div>Value: {currentValue}</div>
          <div>Max Value: {maxValue}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardChartWaterPressureToday
