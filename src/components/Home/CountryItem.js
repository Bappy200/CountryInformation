import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 130,
    },
  });
  
  const handlerCountry = (name, capital)=>{
    alert(`Name: ${name}\n Capital: ${capital}`)
  }
function CountryItem({name, flag, capital}) {
    const classes = useStyles();
    return (
        <Grid item md={4} sm={12} onClick={()=> handlerCountry(name, capital)}>
                <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={flag}
            title={name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {capital}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
    )
}

export default CountryItem
