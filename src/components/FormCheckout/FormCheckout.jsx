import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const FormCheckout = ({ handleSubmit, handleChange }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <form action=''>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
            //             error={errors.nombre ? true : false}
            //           helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
            //         error={errors.email ? true : false}
            //       helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
              onChange={handleChange}
            //       error={errors.phone ? true : false}
            //     helperText={errors.phone}
            />
          </Grid>


          <Grid item xs={6}>

            <Link style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop: 100 }} to="/">

              <Button variant='contained' color='success'>
                COMPRAR

              </Button>

            </Link>

          </Grid>
        </Grid>





      </form>

    </div>
  )
}

export default FormCheckout