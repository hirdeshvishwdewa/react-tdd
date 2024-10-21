import { useState } from "react";

function Widget() {

    const [range, setRange] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setSetPassword] = useState("jshdgjagsd");

    return (
        <div className="mt-10 p-4 rounded-lg text-orange-900 h-fit w-1/3 bg-blue-400">
            <h1>Password generator widget</h1>
            <div className="w-100">
                <div className="flex">
                    <input className="border rounded-s-lg w-5/6 p-1" type="text" data-testid="password" value={password}/>
                    <button className="bg-blue-600 rounded-e-lg px-3 h-100 w-1/6 border-blue-600 border text-white">Copy</button>
                </div>
                <div className="flex gap-3 mt-2 w-100">
                    <div className="w-2/4">
                        <input data-testid="range" type="range" min="6" max="32" value={range} onChange={(e) => setRange(Number(e.target.value))} /> Length ({range})
                    </div>
                    <div><input data-testid="numbers" type="checkbox" checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.checked)}/> Numbers</div>
                    <div><input data-testid="characters" type="checkbox" checked={charactersAllowed} onChange={(e) => setCharactersAllowed(e.target.checked)} /> Characters</div>
                </div>
            </div>
        </div>
    );
}

export default Widget;