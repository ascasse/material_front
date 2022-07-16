

const handleUpdate = () => {
    axios.post(API.updateBatch, JSON.stringify(batch), {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            console.log(res.data)
            navigate(FrontRoutes.recent)
        })
}

export function Completed() {
    return (
        <div className="Completed">
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
    );
}