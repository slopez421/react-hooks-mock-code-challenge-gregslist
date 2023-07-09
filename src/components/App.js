import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((listings) => setListings(listings))
  }, [])

function onDeleteListing(deletedListing) {
const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
setListings(updatedListings)
}

function handleSearch(event) {
  setSearch(event.target.value);
  console.log(event.target.value)

}

const listingsToDisplay = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch}/>
      <ListingsContainer listings={listingsToDisplay}  onDeleteListing={onDeleteListing}/>
    </div>
  );
}

export default App;
