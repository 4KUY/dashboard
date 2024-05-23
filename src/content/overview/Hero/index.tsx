import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import manualResult, { manualResult1 } from '../../../http/fetchLogin'
import { useEffect, useState } from 'react';
const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(15)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const LoginField = styled(Box)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
  `
)
const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  
  const [email, setEmail] = useState('kibrito-admin@kibrito.org')
  
  const [password, setPassword] = useState('easypass')
  
  const navigate = useNavigate();

  const loginConfirm = () => {
    manualResult(email, password).finally(() => {
      navigate("/dashboards/crypto")
    })
}
return (
  <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
    <Grid
      spacing={{ xs: 6, md: 10 }}
      justifyContent="center"
      alignItems="center"
      container
    >
      <Grid item md={10} lg={8} mx="auto">
        <LabelWrapper color="success">Version 2.0.0</LabelWrapper>
        <TypographyH1 sx={{ mb: 2 }} variant="h1">
          White React Typescript Admin Dashboard
        </TypographyH1>

        <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            email = kibrito-admin@kibrito.org
            password = easypass
          </TypographyH2>

        <LoginField

        >
          <TextField
            required
            id="outlined-required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Required"
            sx={{ marginRight: '20px' }}
          />
          <TextField
            id="outlined-password-input"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </LoginField>
        <Button
          onClick={() => loginConfirm()}
          size="large"
          variant="contained"
        >
          Login
        </Button>
        
      </Grid>
    </Grid>
  </Container>
);
}

export default Hero;
