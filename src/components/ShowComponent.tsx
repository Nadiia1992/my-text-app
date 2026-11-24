interface ShowProps {
    result: string;
}

function Show({result}: ShowProps) {
    return (
        <div>
            <h3>Результат транслітерації:</h3>

            <textarea
            value={result}
            placeholder="Тут буде результат..."
            />
        </div>
    );
}

export default Show;