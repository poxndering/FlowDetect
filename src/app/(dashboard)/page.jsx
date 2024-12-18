// MUI Imports
import Grid from '@mui/material/Grid'

import CardChartWaterFlowToday from '@/components/dashboard/CardChartWaterFlowToday'
import CardChartWaterPressureToday from '@/components/dashboard/CardChartWaterPressureToday'
import CardBarChartWaterFlow from '@/components/dashboard/CardBarChartWaterFlow'
import CardBarChartWaterPressure from '@/components/dashboard/CardBarChartWaterPressure'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={6}>
        <CardChartWaterFlowToday />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CardChartWaterPressureToday />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CardBarChartWaterFlow />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CardBarChartWaterPressure />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
