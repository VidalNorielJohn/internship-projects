import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: ["Harry Potter", "The Great Gatsby", "Moby Dick"], // Available books
  borrowedBooks: [], // Books that students borrow
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    borrowBook: (state, action) => {
      const bookIndex = state.books.indexOf(action.payload);
      if (bookIndex !== -1) {
        state.borrowedBooks.push(state.books[bookIndex]); // Move book to borrowed list
        state.books.splice(bookIndex, 1); // Remove from available books
      }
    },
    returnBook: (state, action) => {
      const bookIndex = state.borrowedBooks.indexOf(action.payload);
      if (bookIndex !== -1) {
        state.books.push(state.borrowedBooks[bookIndex]); // Return book to available list
        state.borrowedBooks.splice(bookIndex, 1); // Remove from borrowed list
      }
    },
  },
});

export const { borrowBook, returnBook } = librarySlice.actions;
export default librarySlice.reducer;
