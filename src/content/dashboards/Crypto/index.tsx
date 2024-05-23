import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Card, CardActions, CardContent, Container, Grid, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography, styled } from '@mui/material';
import Footer from 'src/components/Footer';


import { useEffect, useRef, useState } from 'react';
import { getRest } from 'src/http/fetchRestaurants';
import { RestaurantsTranslations } from 'src/types/types';
function DashboardCrypto() {
  
  const UserBoxText = styled(Card)(
    ({ theme }) => `
          text-align: left;
          padding-left: ${theme.spacing(1)};
          margin:20px;
  `
  );
  interface Rest {
    translations: RestaurantsTranslations[]
  }
  const [value, setValue] = useState('en');
  const [restaurants, setRestaurants] = useState<Rest[]>([])
  const [restaurantsTemp, setRestaurantsTemp] = useState([]) //<Rest1>
  useEffect(()=>{
    getRest().then((response: Rest[]) => { //: Rest1
      setRestaurants(response)
      let a = [...response].map(item => item.translations.filter(item => item.languages_code === 'en')).flat()
      setRestaurantsTemp(a)
    }).finally(()=>{
      console.log(restaurants)
    })
  },[])
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    
    console.log(newValue)
    let a = [...restaurants].map(item => item.translations.filter(item => item.languages_code === newValue)).flat()
    
    setRestaurantsTemp(a)
    
    console.log(a)
  };

  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      
      <Container maxWidth="lg">
      <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="en">en</ToggleButton>
      <ToggleButton value="ru">ru</ToggleButton>
      <ToggleButton value="tr">tr</ToggleButton>
    </ToggleButtonGroup>
      </Container>
      <Container maxWidth="lg">
        {restaurantsTemp.map((item)=> <UserBoxText key={item.id} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.id } restaurant
        </Typography>
        <Typography variant="body2">
        {item.title}
          <br />
          {item.description}
        </Typography>
      </CardContent>
    </UserBoxText>)}
        
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
