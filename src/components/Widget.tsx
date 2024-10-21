function Widget() {
    return ( 
        <div>
            <h1>Password generator widget</h1>
            <div>
                <div>
                    <input type="text" data-testid="password"/>
                </div>
                <div>
                    <button>Copy</button>
                </div>
            </div>
        </div>
     );
}

export default Widget;