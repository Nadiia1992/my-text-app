import { useState } from "react";

import Input from "./InputComponet";
import Show from "./ShowComponent";
import alphabet from "../alphabet";

function Translator() {
    const [text, setText] = useState("");

    let result = "";

    for (let i = 0; i < text.length; i++) {
        let letter = text[i].toLowerCase();
        result += alphabet[letter] || letter;
    }

    return (
        <div>
            <h2>Транслітерація тексту</h2>

            <Input text={text} setText={setText} />

            <Show result={result} />
        </div>
    );
}

export default Translator;