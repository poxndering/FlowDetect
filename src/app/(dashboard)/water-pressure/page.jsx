// MUI Imports
import Grid from '@mui/material/Grid'

import CardChart from '@/components/water-flow/CardChart'
import CardChartsGauge from '@/components/water-pressure/CardChartsGauge'

const WaterPressure = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={5}>
        <CardChartsGauge />
      </Grid>

      <Grid item xs={12} md={6} lg={7}>
        <CardChart />
      </Grid>
    </Grid>
  )
}

export default WaterPressure
