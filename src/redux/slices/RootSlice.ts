import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author: 'Author',
        genre: 'Genre',
        isbn: 'ISBN',
        title: 'Title',
    },
    reducers: {
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseGenre, chooseISBN, chooseTitle } = rootSlice.actions;