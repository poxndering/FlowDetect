// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
// Components Imports
import OptionMenu from '@core/components/option-menu'

import Image from 'next/image'

const CardImage = () => {
  return (
    <Card>
      <CardHeader title='การไหลของน้ำ' className='mb-5'></CardHeader>
      <CardContent className='flex flex-col gap-11 md:mbs-2.5'>
        <div className='flex justify-center'>
          <Image src={'/images/pages/water-flow.png'} alt='Total Earning' width={200} height={200} />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardImage
