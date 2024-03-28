import './App.css';
import Tabs from './components/Tabs';
import { tabData, taskData } from './components/Data';
function App() {

    return (
        <div className="App  ">
            <h1 className="title">#todo</h1>
            <Tabs tabs={tabData}  />
        </div>
    );
};

export default App;