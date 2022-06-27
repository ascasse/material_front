import API from "../Api";
import '../css/BitImage.css'

export function BitImage(props) {
    return (
        <div className="BitImage" id={"div_" + props.image.Id}>
            <h2>{props.image.Text}</h2>
            <img
                id={props.image.Id}
                src={API.image + props.image.Id}
                title={props.image.Text}
                alt={props.image.Text}
            />
        </div>
    );
};