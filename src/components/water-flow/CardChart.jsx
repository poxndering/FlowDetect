// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// MUI X Charts Imports
import { LineChart } from '@mui/x-charts/LineChart'

const CardChart = () => {
  return (
    <Card style={{ width: '100%' }}>
      <CardHeader title='การไหลของน้ำ' className='mb-5' />
      <CardContent className='flex flex-col gap-5'>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, -5.5, 2, -7.5, 1.5, 6],
              area: true,
              baseline: 'min'
            }
          ]}
          //   width={}
          height={300}
        />
      </CardContent>
    </Card>
  )
}

export default CardChart
