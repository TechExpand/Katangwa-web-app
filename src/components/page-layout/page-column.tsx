import React from "react"
import { Grid, useTheme } from "@material-ui/core"

export default function PageColumn({ size, children }) {
    const theme = useTheme()
    const classes = styles(theme)

    return (
      <Grid item xs={12} sm={12} md={size} style={classes.root as any}>
          {children}
      </Grid>
    )
}

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column"
    }
})
