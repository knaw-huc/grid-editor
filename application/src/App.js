import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';

function App() {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: 'make', editable: true },
    { field: 'model', editable: true},
    { field: 'price', editable: true },
    { field: 'electric', editable: true },
  ]);

  return (
      <>
    <div className={"ag-theme-quartz"} style={{ width: '800px', height: '500px' }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
      </>
  );
}

export default App;
