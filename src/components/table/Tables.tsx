import React, { FC, ReactElement, useEffect } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {productNutrition} from "../../features/nutritiontypes"

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 'auto',
  },
});


interface Props{
    data: productNutrition
}

const Tables : FC<Props> = ({data}) : ReactElement => {
  const classes = useStyles();
  const {nutrients} = data;


  useEffect(() => {
    console.log(nutrients)
  }, [nutrients])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nutrition Information</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">unit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {
            nutrients.map(({name, amount, unit}) => {
              return <StyledTableRow key={name}>
                <StyledTableCell component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell align="right">{amount}</StyledTableCell>
                <StyledTableCell align="right">{unit}</StyledTableCell>
              </StyledTableRow>
            })
          }
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables