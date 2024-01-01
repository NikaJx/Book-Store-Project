import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { IBooks, IBooksData } from "../../interface/books.type";
import BookCard from "../../components/book-card/BookCard";
import BookTable from "../../components/book-table/BookTable";

const Home = () => {
    const [books, setBooks] = useState<IBooks[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showType, setShowType] = useState<string>("table");

    useEffect(() => {
        setLoading(true);

        axios
            .get<IBooksData>("http://localhost:5555/books")
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType("table")}
                >
                    Table
                </button>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType("card")}
                >
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to={"/books/create"}>
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === "table" ? (
                <BookTable books={books} />
            ) : (
                <BookCard books={books} />
            )}
        </div>
    );
};

export default Home;
