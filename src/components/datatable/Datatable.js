import React, { Component, useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

/*const baseUrl="https://jsonplaceholder.typicode.com/posts";*/


const data = [
  { id: 1, Fecha: "20/02/2021", Producto: "Parlante Sony XRG-302", Precio: "$420" },
  { id: 2, Fecha: "20/02/2021", Producto: "Auricular Sony SDA-2", Precio: "$20" },
  { id: 3, Fecha: "20/02/2021", Producto: "Monitor LG 24", Precio: "$670" },
  { id: 4, Fecha: "20/02/2021", Producto: "Teclado EKG 30", Precio: "$120" },
  { id: 5, Fecha: "20/02/2021", Producto: "Mouse NOGANET", Precio: "$20" },
  { id: 6, Fecha: "20/02/2021", Producto: "Gabinete Rocks JVSV", Precio: "$100" },
  { id: 7, Fecha: "20/02/2021", Producto: "Notebook Lenovo s340", Precio: "$800" },
  { id: 8, Fecha: "20/02/2021", Producto: "Antena WIFI TpLink", Precio: "$40" },
  { id: 9, Fecha: "20/02/2021", Producto: "Switch Cisco XRG-302", Precio: "$300" },
  { id: 10, Fecha: "20/02/2021", Producto: "Cable HDMI ", Precio: "$25" },
  { id: 11, Fecha: "20/02/2021", Producto: "Parlante Sony XRG-302", Precio: "$420" },
  { id: 12, Fecha: "20/02/2021", Producto: "Auricular Sony SDA-2", Precio: "$20" },
  { id: 13, Fecha: "20/02/2021", Producto: "Monitor LG 24", Precio: "$670" },
  { id: 14, Fecha: "20/02/2021", Producto: "Teclado EKG 30", Precio: "$120" },
  { id: 15, Fecha: "20/02/2021", Producto: "Mouse NOGANET", Precio: "$20" },
  { id: 16, Fecha: "20/02/2021", Producto: "Gabinete Rocks JVSV", Precio: "$100" },
  { id: 17, Fecha: "20/02/2021", Producto: "Notebook Lenovo s340", Precio: "$800" },
  { id: 18, Fecha: "20/02/2021", Producto: "Antena WIFI TpLink", Precio: "$40" },
  { id: 19, Fecha: "20/02/2021", Producto: "Switch Cisco XRG-302", Precio: "$300" },
  { id: 20, Fecha: "20/02/2021", Producto: "Cable HDMI ", Precio: "$25" },
];



const columnas =[
    {
        title:'id',
        field:'id',
    },
    {
        title: 'Fecha',
        field: 'Fecha'
    },
    {
        title: 'Producto',
        field: 'Producto'
    },
    {
        title: 'Precio',
        field: 'Precio'
    }
]


function Datatable(props){
    /*const [data, setData] = useState([]);

    const petiticionGet= async() => {
        await axios.get(baseUrl)
        .then(response =>{
            setData(response.data);
        })
    }
    
    useEffect(() => {
        petiticionGet();
    }, []);*/

    return(
        <div className="w-full p-10 mx-auto z-0">
            <MaterialTable 
            columns={columnas}
            data={data}
            title="Productos Destacados"
            actions={[{
            icon: 'add',
            tooltip: 'Crear Producto',
            onClick: (event, rowData) => console.log(rowData)
            },
            {
              icon: 'edit',
              tooltip: 'Editar Producto',
              onClick: (event, rowData) => console.log(rowData)
              },
              {
                icon: 'delete',
                tooltip: 'Borrar Producto',
                onClick: (event, rowData) => console.log(rowData)
                },
              
            ]}
            options={
                {actionsColumnIndex: -1}
            }
            localization={{
                header: {actions: 'Acciones'}
            }}
            size='small'
        />
        </div>
        
    )
}

export default Datatable;