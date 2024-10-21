function Widget() {


    return (
        <div className="mt-10 p-4 rounded-lg bg-blue-gray-600 h-fit w-1/3">
            <h1>Password generator widget</h1>
            <div className="w-100">
                <div className="flex">
                    <input className="border rounded-s-lg w-5/6" type="text" data-testid="password" />
                    <button className="bg-blue-600 rounded-e-lg px-3 h-100 w-1/6 border-blue-600 border text-white">Copy</button>
                </div>
                <div className="flex gap-3 mt-2 w-100">
                    <div data-testid="slider" className="w-2/4"> Length </div>
                    <div data-testid="numbers"><input type="checkbox" /> Numbers</div>
                    <div data-testid="characters"><input type="checkbox" /> Characters</div>                    
                </div>
            </div>
        </div>
    );
}

export default Widget;