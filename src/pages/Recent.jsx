import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '../recent.css'
import API from '../Api'
import { FrontRoutes } from "../AppRoutes"

const Recent = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(API.recent)
        // .then(res => res.text())          // convert to plain text
        // .then(text => console.log(text))
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
      navigate(API.batchImages, { state: { category } });
    }

    if (error) {
        return <p>{error.message}</p>;
      } else if (!isLoaded) {
        return <p>loading...</p>;
      } else {
        return (
          <main className="recent">
            <div className="container">
              <ul className="card-grid">
                {categories.map((category) => (
                  <li>
                    <article className="card" key={category.Id}>
                        <div className="card-image">
                            <img src={API.image + category.Items[0].Id} alt={category.Name} />
                        </div>
                        <div className="card-content">
                            <h2 className="card-name">{category.Name}</h2>
                            <p>Last viewed: <span>{category.LastUse != null ? category.LastUse : 'Never'}</span></p>
                            <p>Bits: <span>{category.Items.length}</span></p>
                            {/* Render if image clicked */}
                            {/* <Navigate to="/batch-images" state={category} replace={true} /> */}
                            {/* <Link to={{ pathname: API.batchImages, state: category}}>
                              <span><FontAwesomeIcon icon="eye" />Images</span>
                            </Link> */}
                            <button onClick={() => handleImage(category)} alt="Images"><span><FontAwesomeIcon icon="eye" /></span></button>
                        </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        );
    }
}

export default Recent