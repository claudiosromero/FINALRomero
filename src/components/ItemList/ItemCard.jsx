import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"

const ItemCard = ({ item }) => {
    return (

        <Card sx={{ Width: 400, margin: 1 }} >
            <CardMedia
                sx={{ height: 200 }}
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
                <Typography variant="body2" color="text.secondary">
                    {item.stock}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">Mas Detalles</Button>
            </CardActions>
        </Card>

    )
}

export default ItemCard