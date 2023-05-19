import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"

import { Link } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

const ItemCard = ({ item }) => {
    return (

        <Card sx={{ Width: 365, margin: 1 }} >
            <CardMedia
                sx={{ height: 200, width: 200 }}
                image={item.img}
                title={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" color="primary">
                    ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">Disponobles: {item.stock} Unidades
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/ItemDetail/${item.id}`}>
                    <Button variant="contained" size="small">
                        Mas Detalles
                    </Button>
                </Link>
            </CardActions>
        </Card>

    )
}

export default ItemCard