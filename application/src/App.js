import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './App.css';
import Header from "./header";
import {AgGridReact} from 'ag-grid-react';
import React, {useState} from 'react';

function App() {
    const add = function() {
        console.log('Added');
    }
    const [rowData, setRowData] = useState([
        {
            Bladnummer: 1,
            Volgnummer: 1,
            DAG_inschrijving: 2,
            MAAND_inschrijving: 12,
            JAAR_inschrijving: 1869,
            Familienaam: "Everard",
            Voornamen: "Dorothea Maria",
            Geslacht: "v",
            Betrekking_hoofd: "hoofd",
            DAG_geboorte: 22,
            MAAND_geboorte: 5,
            JAAR_geboorte: 1835,
            Geboorteplaats: "Amsterdam",
            Burgerlijke_stand: "o",
            x: "",
            Religie: "RC",
            Beroep: "Religieuse",
            Huizing: "Hooge Rijndijk No 63",
            DAG_vestiging: null,
            MAAND_vestiging: null,
            JAAR_vestiging: null,
            Vorige_woonplaats: "",
            DAG_vertrek: null,
            MAAND_vertrek: null,
            JAAR_vertrek: null,
            Bestemming: "",
            DAG_overlijden: null,
            MAAND_overlijden: null,
            JAAR_overlijden: null,
            PLAATS_overlijden: "",
            Domicilie: "",
            Aanmerkingen: ""
        },
        {
            Bladnummer: 1,
            Volgnummer: 10,
            DAG_inschrijving: 2,
            MAAND_inschrijving: 12,
            JAAR_inschrijving: 1869,
            Familienaam: "Bossche",
            Voornamen: "Maria Honorina",
            Geslacht: "v",
            Betrekking_hoofd: "geen",
            DAG_geboorte: 22,
            MAAND_geboorte: 6,
            JAAR_geboorte: 1814,
            Geboorteplaats: "Ellerbeek bij Brussel",
            Burgerlijke_stand: "w",
            x: "",
            Religie: "RC",
            Beroep: "Religieuse",
            Huizing: "",
            DAG_vestiging: null,
            MAAND_vestiging: null,
            JAAR_vestiging: null,
            Vorige_woonplaats: "",
            DAG_vertrek: 25,
            MAAND_vertrek: 1,
            JAAR_vertrek: 1873,
            Bestemming: "s Gravenhage",
            DAG_overlijden: null,
            MAAND_overlijden: null,
            JAAR_overlijden: null,
            PLAATS_overlijden: "",
            Domicilie: "",
            Aanmerkingen: ""
        }
    ]);

    // Column Definitions: Defines & controls grid columns.
    /*const [colDefs, setColDefs] = useState([
      { field: 'make', editable: true },
      { field: 'model', editable: true},
      { field: 'price', editable: true },
      { field: 'electric', editable: true },
    ]);*/

    const [colDefs, setColDefs] = useState([
        {field: "Bladnummer", editable: true, cellDataType: 'number', width: '100px;'},
        {field: "Volgnummer", editable: true, cellDataType: 'number'},
        {field: "DAG_inschrijving", editable: true, cellDataType: 'number'},
        {field: "MAAND_inschrijving", editable: true, cellDataType: 'number'},
        {field: "JAAR_inschrijving", editable: true, cellDataType: 'number'},
        {field: "Familienaam", editable: true},
        {field: "Voornamen", editable: true},
        {field: "Geslacht", editable: true, cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['m', 'v', 'o'],
            } },
        {field: "Betrekking_hoofd", editable: true},
        {field: "DAG_geboorte", editable: true, cellDataType: 'number'},
        {field: "MAAND_geboorte", editable: true, cellDataType: 'number'},
        {field: "JAAR_geboorte", editable: true, cellDataType: 'number'},
        {field: "Geboorteplaats", editable: true},
        {field: "Burgerlijke_stand", editable: true},
        {field: "x", editable: true},
        {field: "Religie", editable: true},
        {field: "Beroep", editable: true},
        {field: "Huizing", editable: true},
        {field: "DAG_vestiging", editable: true, cellDataType: 'number'},
        {field: "MAAND_vestiging", editable: true, cellDataType: 'number'},
        {field: "JAAR_vestiging", editable: true, cellDataType: 'number'},
        {field: "Vorige_woonplaats", editable: true},
        {field: "DAG_vertrek", editable: true, cellDataType: 'number'},
        {field: "MAAND_vertrek", editable: true, cellDataType: 'number'},
        {field: "JAAR_vertrek", editable: true, cellDataType: 'number'},
        {field: "Bestemming", editable: true},
        {field: "DAG_overlijden", editable: true, cellDataType: 'number'},
        {field: "MAAND_overlijden", editable: true, cellDataType: 'number'},
        {field: "JAAR_overlijden", editable: true, cellDataType: 'number'},
        {field: "PLAATS_overlijden", editable: true},
        {field: "Domicilie", editable: true},
        {field: "Aanmerkingen", editable: true}]);

    return (
        <>
            <div className={"ag-theme-quartz"} style={{width: '100%', height: '500px'}}>
                <Header addRow={add}/>
                <AgGridReact rowData={rowData} columnDefs={colDefs} editType={"fullRow"}/>
            </div>
        </>
    );
}

export default App;
