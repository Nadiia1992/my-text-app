interface InputProps {
    text: string;
    setText: (value: string) => void;
}

function Input({text, setText}: InputProps) {
    return (
        <div> 
            <h3>Введіть текст:</h3>

            <textarea value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введіть текст українською..."
            />
        </div>
    );
}

export default Input;