import '../css/BitTitle.css'

export function BitTitle(props) {
    return (
        <div className="BitTitle">
            <span>{props.text.text}</span>
        </div>
    );
}
