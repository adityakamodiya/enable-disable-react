import React, { useState, useEffect } from 'react';
import "./styles.css";

function App() {
// let input = document.querySelector('input')
// console.log(input.value=='value 1')

    const [hide,sethide]  = useState(true)
   
    const [initialData, setInitialData] = useState([
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
      
    ]);

    function disable(){
      var enableBtn = document.querySelector('.enable')
        var disableBtn = document.querySelector('.disable')
        disableBtn.disabled = true
        enableBtn.disabled = false
    //     // sethide(hide.disabled = true)
        
    //     // console.log(tr)
        sethide(false)
     
   

    }

    function enable()
    {  var enableBtn = document.querySelector('.enable')
         var disableBtn = document.querySelector('.disable')
        disableBtn.disabled = false
       
        enableBtn.disabled = true
        sethide(true)

    
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Attribute 1</th>
                        <th>Attribute 2</th>
                        <th>Attribute 3</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {initialData.map((data, index) => (
                      (hide)?
                      <tr className="table-row" key={index}>
                            <td>
                                <input type="text" value={data.attribute1} readOnly />
                            </td>
                            <td>
                                <input type="text"   value={data.attribute2} readOnly />
                            </td>
                            <td>
                                <input type="text" value={data.attribute3} readOnly />
                            </td>
                        </tr>
                        :
                        <tr className="table-row" key={index}>
                            <td>
                                <input type="text" disabled value={data.attribute1} readOnly />
                            </td>
                            <td>
                                <input type="text" disabled  value={data.attribute2} readOnly />
                            </td>
                            <td>
                                <input type="text" disabled value={data.attribute3} readOnly />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button  className='disable' onClick={disable}>
                    Disable
                </button>
                <button className='enable' onClick={enable}  >
                    Enable
                </button>
            </div>
        </div>
    );
}

export default App;
