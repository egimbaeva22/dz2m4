import React, {useState} from "react";

const ColorSwitcher = () => {
    const [color1, setColor1] = useState('red');
    const [color2, setColor2] = useState('blue');

    const SquareClick = (squareNumber) => {
        if (squareNumber === 1) {
            setColor1(color2);
            setColor2(color1);
        } else if (squareNumber === 2) {
            setColor1(color2);
            setColor2(color1);
        }
    };

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color1,
                    cursor: 'pointer',
                }}
                onClick={() => SquareClick(1)}
            >
                Квадрат 1
            </div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color2,
                    cursor: 'pointer',
                }}
                onClick={() => SquareClick(2)}
            >
                Квадрат 2
            </div>
        </div>
    );
};

export default ColorSwitcher;


