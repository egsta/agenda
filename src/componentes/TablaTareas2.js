
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
  //const rows = tablaTareas;

  
  export default function TablaTareas2(props) {
      const rows = props.rows;
      const columns = [
       {headerName: "Tarea", field: "tarea", width: 150,editable: true,},
       {headername: "Prioridad", field: "prioridad", width: 90,editable: true,},
       {headername: "Fecha", field: "fecha", width: 150,editable: true,},
       {headername: "Descripcion", field: "descripcion", width: 200,editable: true,},
       {
           field: 'col6',
           headerName: 'Accion',
           width: 150,
           renderCell: (params) => {
            return (
                <div className="tarea-contenedor-iconos"
            onClick={()=>processSelection(params.id)}>
                < DeleteIcon className="tarea-icono" style={{color: "red"}}/>
                <span>Borrar</span>
            </div>
                // <strong>
                //     <Button
                //         variant="contained"
                //         color="secondary"
                //         size="small"
                //         style={{ marginLeft: 16 }}
                //         onClick={() => {
                //             processSelection(params.id)
                //         }}
                //     >
                //        Borrar Tarea
                //     </Button>
                // </strong>
            )},
           disableClickEventBubbling: true,
       },];

      const processRowUpdate = (newRow) => {
          // Make the HTTP request to save in the backend
          console.log("llego a Rowupdate", newRow)
          props.onCellChange(newRow);
        
          return newRow
        };
        
        const handleProcessRowUpdateError = React.useCallback((error) => {
            console.log({ children: error.message, severity: 'error' });
          }, []);

          const processSelection = (newSelection) =>{
            console.log("llego a newSelection") ;
            console.log(newSelection)
            props.eliminarTarea(newSelection)
          }
        //   const selectionModel = (select) => {
        //       console.log("Select row", select)
        //   }
         
    return (
        <>
        <div style={{ height: 400, width: '100%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={processSelection}
            
          />
         
        </div>
        </>
      );
    }