function Widget() {


    return (
        <div className="mt-10 p-4 rounded-lg bg-gray-500 h-fit w-1/3">
            <h1>Password generator widget</h1>
            <div className="w-100">
                <div className="flex">
                    <input className="border rounded-s-lg w-5/6" type="text" data-testid="password" />
                    <button className="bg-blue-600 rounded-e-lg px-3 h-100 w-1/6 border-blue-600 border text-white">Copy</button>
                </div>
                <div className="flex">
                    <div data-testid="slider">Choose Length: </div>
                    <input type="checkbox" data-testid="numbers"/>
                    <input type="checkbox" data-testid="characters"/>
                </div>
                
            </div>
        </div>
    );
}

export default Widget;