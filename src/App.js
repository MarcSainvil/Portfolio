import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Introduction from "./pages/Introduction";
import Books from "./pages/Books";
import Book from "./pages/Book";
import WhatTimeIsIt from "./pages/WhatTimeIsIt";

import books from "./data/books";

const App = () => {

	return (
		<Router>
			<GlobalStyles/>
			<Switch>
				<Route path ="/" element={<Introduction/>}/>
				<Route path ="/books" element={<Books books={books}/>}/>
				<Route path ="/book/:bookId" element={<Book books={books}/>}/>
				<Route path ="/time" element={<WhatTimeIsIt/>}/>
				<Route path ="*" element={<Navigate to="/"/>}/>
			</Switch>
		</Router>
	)
}

export default App