import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Buttons from "./components/buttons";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import Stack from "@mui/material/Stack";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


type Anchor = 'menu';



const Lists = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

import "./style.css";

function createData(id, nome, date, button) {
  return { id, nome, date, button };
}

const rows = [
  createData(
    "637fbb516f4dd2ea96b40293",
    "ADMIN CFG",
    "11/24/2022 18:43:29",
    <Buttons />
  ),
  createData(<b>Id</b>, <b>Nome</b>, <b>Data de criação</b>, ""),
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


function App(props: Props) {

  const [number, setNumber] = React.useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { items } = usePagination({
    count: 1,
  });





  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Daemon investimentos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Fundos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>       
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );




  return (
    <div className="App">
      <header>
        <div className="menu">
           {(['menu'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        </div>
      </header>
      <div className="container">
        <div>
          <h1 className="fundos-title">Fundos</h1>
        </div>
        <div>
        <Stack className="stack" spacing={2}>
          <Alert  sx={{ width: '95%' }} variant="filled" severity="success">
            Ótimo! Upload dos arquivos ocorreu com sucesso!
          </Alert>
          <Alert sx={{ width: '19%' }} variant="filled" severity="success">
            Subir arquivos para o servidor
          </Alert>
        </Stack>
        </div>
        <div className="container-list">
          <h3>Lista de todos os fundos</h3>
        </div>
        <div className="view">
          <div className="view-second">
            <div>
              <h3>Show</h3>
              <div>
                <Box sx={{ minWidth: 220 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={number}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>10</MenuItem>
                      <MenuItem value={2}>20</MenuItem>
                      <MenuItem value={3}>30</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div className="view-2">
              <h3>Search:</h3>
              <div>
                <Box component="form" autoComplete="off">
                  <TextField id="outlined-basic" variant="outlined" />
                </Box>
              </div>
            </div>
          </div>
          <div className="tabela">
            <h3>entries</h3>
            <Stack direction="row" alignItems="center" spacing={0.2}>
              <Button variant="contained" component="label">
                Copy
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button variant="contained" component="label">
                CSV
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button variant="contained" component="label">
                Excel
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button variant="contained" component="label">
                PDF
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button variant="contained" component="label">
                Print
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="title-table">
                      <b>Id</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Nome</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Data de criação</b>
                    </TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} className="border-table">
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.nome}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">{row.button}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <div className="page-container">
              <div className="rows-page">
                <TablePagination
                  component="div"
                  count={1}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
              <nav className="nav-container">
                <Lists>
                  {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === "start-ellipsis" || type === "end-ellipsis") {
                      children = "…";
                    } else if (type === "page") {
                      children = (
                        <button
                          type="button"
                          style={{
                            fontWeight: selected ? "bold" : undefined,
                          }}
                          {...item}
                        >
                          {page}
                        </button>
                      );
                    } else {
                      children = (
                        <button type="button" {...item}>
                          {type}
                        </button>
                      );
                    }
                    return <li key={index}>{children}</li>;
                  })}
                </Lists>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
