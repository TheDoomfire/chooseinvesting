import "./sass/style.css";
import BarChart from "./scripts/BarChart";
import useState from 'react-hook-use-state';
import { stockCitycon } from "./scripts/data"

function App() {

    const [stockCitycon, setStockInfo] = useState({
        labels: stockCitycon.map((data) => data.year),
        datasets: [{
            label: "YOY Nav Value",
            data: stockCitycon.map((data) => data.nav),

        }]
    })
    return <div className="App">
        <BarChart chartData={stockCitycon}/>
    </div>;
};

export default App;