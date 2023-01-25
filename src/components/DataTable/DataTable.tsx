import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { LibraryForm } from '../LibraryForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'genre', headerName: 'Genre', flex: 1 },
    { field: 'isbn', headerName: 'ISBN', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 2 },
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { bookData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        // console.log(gridData.data.id);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    // console.log(gridData.data.id!);
    // console.log(`testing for data ${libraryData}`)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>My Contacts</h2>

        <DataGrid rows={ bookData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
						// console.log(item)
          }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Contact {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Contact</DialogContentText>
                    <LibraryForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )
}
