import API from "../Api";
import '../css/BitImage.css'

export function BitImage(props) {
    return (
        <div className="BitImage" id={"div_" + props.image.id}>
            <h2>{props.image.text}</h2>
            <img
                id={props.image.id}
                src={API.image + props.image.image}
                title={props.image.text}
                alt={props.image.text}
            />
        </div>
    );
};