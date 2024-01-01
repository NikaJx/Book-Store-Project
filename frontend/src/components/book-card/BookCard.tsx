import { IBooks } from "../../interface/books.type";
import BookSingleCard from "../book-single-card/BookSingleCard";

interface IProps {
    books: IBooks[];
}

const BookCard: React.FC<IProps> = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <BookSingleCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default BookCard;
