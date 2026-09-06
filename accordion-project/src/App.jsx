import { useState } from 'react';
import './App.css';
import data from './Data.js';

function App() {
  const [select, setSelect] = useState(null);

  const singleSelect = (currId) => {
    setSelect(currId === select ? null : currId); 
  };

  return (
    <>
      <div className='accordion'>
        {data.map((dataItem) => {
          return (
            <div key={dataItem.id} className="accordion-item">
              <div onClick={() => singleSelect(dataItem.id)} className="title">
                <h3 className="question">{dataItem.title}</h3>
                <span>{select === dataItem.id ? '-' : '+'}</span>
              </div>
              
              {select === dataItem.id ? (
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
