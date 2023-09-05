import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import type {ITable} from "./Table.type";

export const TableCont = ({listHead, isLoading, tableUser, handleFilter, width}: ITable) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: {width}}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            listHead.map(el => <TableCell key={el}>{el}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!isLoading && tableUser.length
                        ? tableUser.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                {row.id && <TableCell component="th" scope="row">{row.id}</TableCell>}
                                {row.name && <TableCell>{row.name}</TableCell>}
                                {row.role && <TableCell>{row.role}</TableCell>}
                                {row.ctime && <TableCell>{new Date(1000 * row.ctime).toLocaleString()}</TableCell>}
                                {row.event && <TableCell>{row.event}</TableCell>}
                                {row.id && <TableCell style={{cursor: 'pointer'}}
                                                   onClick={() => handleFilter(row.id)}>Удалить</TableCell>}
                            </TableRow>
                        ))
                        : Array(tableUser.length).fill("").map((_, i) =>
                            <TableRow key={i} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row">Загрузка</TableCell>
                            </TableRow>)

                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};