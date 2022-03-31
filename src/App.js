import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SummaryForm from './pages/summary/SummaryForm';
import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  return (
    <div className="App">
      <Container>
        <OrderDetailsProvider>
          <OrderEntry />
        </OrderDetailsProvider>
      </Container>
    </div>
  );
}

export default App;
