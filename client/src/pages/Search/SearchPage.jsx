import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/Search/SearchInput";
import SearchSuggestions from "../../components/Search/SearchSuggestions";
import SearchResults from "../../components/Search/SearchResults";
import { getSearchResults } from "../../services/searchResultsService";



function SearchPage() {
    useEffect(() => {
        getSearchResults("iphone")
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto p-8">

                <h1 className="text-4xl font-bold mb-8">
                    Search Products
                </h1>

                <SearchInput />

                <SearchSuggestions />

                <SearchResults />

            </div>
        </>
    );
}

export default SearchPage;