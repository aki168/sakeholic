import { Title } from '@COM/Title'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [160, 200, 130, 270, 200, 150, 240, 180, 150];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  boxShadow: 'none'
}));

const FindingPage = () => {

  return (
    <div className='container mx-auto'>
      <Title cn="探索 " jp="日本酒との出会い" />

        <Masonry columns={2} spacing={2}>
          {heights.map((height, index) => (
            <Item key={index} className="rounded">
              <img src={`${process.env.PUBLIC_URL}/media/find${index+1}.jpg`} 
              alt="sake"
              className='h-100 rounded img-fluid' />
            </Item>
          ))}
        </Masonry>


    </div>
  )
}

export default FindingPage