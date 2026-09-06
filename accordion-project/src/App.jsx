import { useState } from 'react';
import './App.css';
import data from './Data.js';

function App() {
  const [select, setSelect] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  const singleSelect = (currId) => {
    setSelect(currId === select ? null : currId); 
  };

  const multiSelect = (currId) =>{
    let cpyMultiple = [...multi];
    let index = cpyMultiple.indexOf(currId);
    if(index == -1){
      cpyMultiple.push(currId);
    }else{
      cpyMultiple.splice(index, 1);
    }
    setMulti(cpyMultiple);
  }

  return (
    <>
      <div className='accordion'>
        <button onClick = {() => {setEnableMulti(!enableMulti)}} className="multi-button">
          {enableMulti ? "Disable MultiSelection" : "Enable MultiSelection"}
        </button>
        {data.map((dataItem) => {
          const isSelected = enableMulti 
            ? multi.indexOf(dataItem.id) !== -1 
            : select === dataItem.id;

          return (
            <div key={dataItem.id} className="accordion-item">
              <div onClick={enableMulti? () => multiSelect(dataItem.id) : () => singleSelect(dataItem.id)} className="title">
                <h3 className="question">{dataItem.title}</h3>
                <span>{isSelected ? '-' : '+'}</span>
              </div>
              
              {isSelected? (
                <div className="content">
                  {dataItem.content}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
