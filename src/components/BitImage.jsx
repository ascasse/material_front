import API from "../Api";
// import '../css/ImageViewPage.css'

export function BitImage(props) {
    return (
        <div className="container" id={"div_" + props.image.Id}>
            <h2>{props.image.Text}</h2>
            <img
                id={props.image.Id}
                src={API.image + props.image.Id}
                title={props.image.Text}
                // onClick={props.image.onClick}
                alt=""
            />
        </div>
    );
};