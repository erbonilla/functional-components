import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';

function App() {

const HandleSubmit = ( valores ) => {
  console.log('APPJS: ', valores);
}

  return (
    <Container component="section" maxWidth="sm" >
    <Typography variant="h3" component="h1" align="center" gutterBottom>Formulario de Registro</Typography>
    <FormSignUp handleSubmit={HandleSubmit}/>
    </Container>
  );
}

export default App;
