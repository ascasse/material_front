import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import API from "../Api";
import { FrontRoutes } from "../AppRoutes";
import { fisherYates } from "../service";
import { BitTitle } from "../components/BitTitle";
import '../css/TitleViewPage.css'

const TitleViewPage = ({ batch1 }) => {

  const { state } = useLocation();
  const batch = state.category; // Read values passed on state
  // Stores the currently displayed item 
  const [active, setActive] = useState(0)
  const navigate = useNavigate();

  // var shuffled = fisherYates(batch.items);
  var shuffled = batch.items;

  const handleClick = () => {
    if (active >= 0 && active + 1 < batch.items.length) {
      setActive(active + 1)
    } else {
      setActive(-1)
    }
  }

  const handleUpdate = () => {
    axios.put(API.updateBatch, JSON.stringify(batch), {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data)
        navigate(FrontRoutes.recent)
      })
  }

  const textComponent =
    active === -1 ? (
      <div className="container">
        <div>
          <h1>Completed.</h1>
          <p>
            <button onClick={handleUpdate}>Update views counter</button>
          </p>
          <p>
            <Link to={FrontRoutes.recent}>Exit</Link>
          </p>
        </div>
      </div>
    ) : (
      <main className="titleViewPage" onClick={handleClick}>
        <BitTitle text={shuffled[active]} />
      </main>
    )

  return (
    <main className="TitleView">
      {textComponent}
    </main>
  )
};

export default TitleViewPage