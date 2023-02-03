import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Icon from './Icon';

//Open Q: Differences when declaring a function inside/outside the component

function App() {
  const [url, setURL] = React.useState('http://styleguide.effectivedigital.com/interview/api/animals'); 
  const [data, setData] = React.useState();
  const [label,setLabel] = React.useState('animal');

  const loadData = async (label) => {
    setLabel(label);
    let url = label === 'fruit' ? 'http://styleguide.effectivedigital.com/interview/api/fruitveg' : 'http://styleguide.effectivedigital.com/interview/api/animals';
    label === 'fruit' ? setURL('http://styleguide.effectivedigital.com/interview/api/fruitveg') : setURL('http://styleguide.effectivedigital.com/interview/api/animals');
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
  }
  
  React.useEffect(() => {
   loadData(label);
  }, [label])
  //curried function
  const handleButtonClick = (id) => () => { console.log("Clicked", id)}
  return (
    <div className="App">

      <div className="ButtonContainer">
        <Button className="button" onClick={() => loadData('animal')} variant="contained">Animal data</Button>
        <Button className="button" onClick={() => loadData('fruit')} variant="contained">Fruit data</Button>
      </div>

      <div className="IconContainer"> 
        {data?.map(row => <Icon className="icon" onClick = {handleButtonClick} key={Math.random(100) * 100000} display={row} />)}
      </div>
    </div>
  );
}

export default App;
