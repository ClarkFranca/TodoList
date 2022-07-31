import { Button, Paper, TextField } from "@mui/material";
import React from "react";  

export const Home: any = () => {
    return(
    <Paper>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="text">ADD</Button>
    </Paper>
    )
}