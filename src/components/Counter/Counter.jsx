import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
    return (
        <div style={{ marginBottom: "50px", display: "flex", gap: "30px" }}>
            <Button variant="contained" onClick={restar}>
                -
            </Button>
            <h2>{counter}</h2>
            <Button variant="contained" onClick={sumar}>
                +
            </Button >
            <Button variant="contained" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
        </div>
    );
};

export default CounterPresentation;