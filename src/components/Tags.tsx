const Tags = (tags: string[]) => {
    return (
        <div className="d-flex gap-2 flex-wrap">
            {
                tags.map(tag =>
                    <p className="m-0 border rounded px-1">{tag}</p>
                )
            }
        </div>
    )
}

export default Tags;
