import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Bar } from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const ChartCard = ({labels, dataChart, income = 0, expense = 0}) => {
  const options = {
    chartAreaBorder: {
      borderColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(0, 0, 0)'
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataChart,
        backgroundColor: '#c1dedf',
        color: '#fff',  
        borderRadius: 1000,
        barThickness: 14,
      }
    ],
  };

  return (
    <div className='container'>
      <Row className='d-flex flex-row justify-content-end'>
        <Row className='d-flex justify-content-end'>
          <Col xs={12} md={6}>
            <BsArrowDown className='text-success fw-bold fs-4' />
            <div>Income</div>
            <div className='fw-bold'>Rp. {Number(income).toLocaleString('id-ID')}</div>
          </Col>
          <Col xs={12} md={6} className='d-flex mt-3 mt-md-0 flex-column justify-content-end align-items-end'>
            <div>
              <BsArrowUp className='text-danger fw-bold fs-4' />
              <div>Expense</div>
              <div className='fw-bold'>Rp. {Number(expense).toLocaleString('id-ID')}</div>
            </div>
          </Col>
        </Row>
        <Col xs={12} className='mt-5'>
          <Bar options={options} data={data} className='text-white'/>
        </Col>
      </Row>
    </div>
  )
}

export default ChartCard
