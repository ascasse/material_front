import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '../css/recent.css'
import API from '../Api'
import { fisherYates } from '../service'


const Recent2 = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.recent)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCategories(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  const handleImage = (category) => {
    var shuffled = fisherYates(category.Items);
    category.Items = shuffled;
    navigate(API.batchImages, { state: { category } });
  }

  const handleTitle = (category) => {
    var shuffled = fisherYates(category.Items);
    category.Items = shuffled;
    navigate(API.batchTitles, { state: { category } });
  }

  if (error) {
    return <p>{error.message}</p>;
  } else if (!isLoaded) {
    return <p>loading...</p>;
  } else {
    return (
      <main className="recent2">
        <div className="container">
          {categories.map((category) => (
            <div className="card" key={category.Id}>
              <img src={API.image + category.Items[0].Id} alt={category.Name} />
              <span>{category.Name}</span>
              <span>Last viewed: {category.LastUse != null ? category.LastUse : 'Never'}</span>
              <span>Bits: {category.Items.length}</span>
              <button onClick={() => handleImage(category)} alt="Images"><span><FontAwesomeIcon icon="eye" /></span></button>
              <button onClick={() => handleTitle(category)} alt="Titles"><span><FontAwesomeIcon icon="font" /></span></button>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Recent2