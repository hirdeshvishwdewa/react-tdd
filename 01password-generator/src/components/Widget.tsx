import { useCallback, useEffect, useRef, useState } from "react";

function Widget() {

    const [range, setRange] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const characters = "!@#$%^&*()";
        if (numberAllowed) str += numbers;
        if (charactersAllowed) str += characters;
        
        for (let i = 1; i <= range; i++) {
            const randomIndex = Math.floor(Math.random() * str.length);
            password += str.charAt(randomIndex);
        }
        setPassword(password);
    }, [range, numberAllowed, charactersAllowed]);

    useEffect(() => {
        generatePassword();
    }, [range, numberAllowed, charactersAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        window.navigator.clipboard.writeText(password);
        (passwordRef.current as unknown as HTMLInputElement).select();
    }, [password])

    return (
        <div className="mt-10 p-4 rounded-lg text-orange-900 h-fit w-1/3 bg-blue-400">
            <h1>Password generator widget</h1>
            <div className="w-100">
                <div className="flex">
                    <input className="border rounded-s-lg w-5/6 p-1" type="text" data-testid="password" value={password} readOnly ref={passwordRef}/>
                    <button className="bg-blue-600 rounded-e-lg px-3 h-100 w-1/6 border-blue-600 border text-white" onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className="flex gap-3 mt-2 w-100">
                    <div className="w-2/4">
                        <input className="cursor-pointer" data-testid="range" type="range" min="6" max="32" value={range} onChange={(e) => setRange(Number(e.target.value))} /> <span>Length({range})</span>
                    </div>
                    <div><input className="cursor-pointer" id="numbers" data-testid="numbers" type="checkbox" checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.checked)}/> <label htmlFor="numbers">Numbers</label></div>
                    <div><input className="cursor-pointer" id="characters" data-testid="characters" type="checkbox" checked={charactersAllowed} onChange={(e) => setCharactersAllowed(e.target.checked)} /> <label htmlFor="characters">Characters</label></div>
                </div>
            </div>
        </div>
    );
}

export default Widget;