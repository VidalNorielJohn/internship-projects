import { useSelector, useDispatch } from "react-redux";
import { borrowBook, returnBook } from "../redux/librarySlice";

export const Library = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.library.books);
  const borrowedBooks = useSelector((state) => state.library.borrowedBooks);

  return (
    <div>
      <h2>📚 Library System</h2>
      <h3>Available Books</h3>
      <ul>
        {books.length > 0 ? (
          books.map((book, index) => (
            <li key={index}>
              {book}
              <button onClick={() => dispatch(borrowBook(book))}>Borrow</button>
            </li>
          ))
        ) : (
          <p>No books available</p>
        )}
      </ul>

      <h3>Borrowed Books</h3>
      <ul>
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((book, index) => (
            <li key={index}>
              {book}
              <button onClick={() => dispatch(returnBook(book))}>Return</button>
            </li>
          ))
        ) : (
          <p>No borrowed books</p>
        )}
      </ul>
    </div>
  );
};
