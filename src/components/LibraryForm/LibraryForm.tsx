import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseAuthor, chooseGenre, chooseISBN, chooseTitle } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface LibraryFormProps {
    id?:string;
    data?:{}
}

interface LibraryState {
    author: string;
    genre: string;
    isbn: string;
    title: string;
}

export const LibraryForm = (props:LibraryFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const author = useSelector<LibraryState>(state => state.author);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseAuthor(data.author));
            dispatch(chooseGenre(data.genre));
            dispatch(chooseISBN(data.isbn));
            dispatch(chooseTitle(data.title));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <Input {...register('genre')} name="genre" placeholder='Genre'/>
                </div>
                <div>
                    <label htmlFor="isbn">Isbn</label>
                    <Input {...register('isbn')} name="isbn" placeholder='ISBN'/>
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
