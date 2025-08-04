const Welcome = () => {
    return (
        <div className="container">
            <h1>Welcome to Baitussalam Tech Park</h1>
            <p>This is paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <label htmlFor="name"> Name </label>
            <input type="text" name="Your name here" id="name" />
        </div>
    )
}

export default Welcome
