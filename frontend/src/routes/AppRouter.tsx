import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateBooks from "../pages/create-books/CreateBooks";
import ShowBook from "../pages/show-book/ShowBook";
import EditBook from "../pages/edit-book/EditBook";
import DeleteBook from "../pages/delete-book/DeleteBook";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBooks />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
    );
};

export default AppRouter;
