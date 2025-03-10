import { Provider } from "react-redux";
import { store } from "./store";
import { MovieInput } from "./MovieInput";
import { MovieList } from "./MovieList"; // Assuming you have a MovieList component

/*************  ✨ Codeium Command 🌟  *************/
const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <MovieInput />
        <MovieList />
      </Provider>
    </React.Suspense>
  );
};
const App = () => (
  <Provider store={store}>
    <MovieInput />
    <MovieList />
  </Provider>
);
/******  59a1cfa3-145e-4c33-9815-16cc14e629be  *******/

export default App;
  