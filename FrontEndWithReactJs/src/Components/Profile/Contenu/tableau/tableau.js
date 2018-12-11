import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import axios from "axios";
import NomPrenom from "./NomPrenom";
import CircularProgress from '@material-ui/core/CircularProgress';
import red from '@material-ui/core/colors/red';
import Avatar from '@material-ui/core/Avatar';
 import AssignmentIcon from '@material-ui/icons/Assignment';
 import blue from '@material-ui/core/colors/blue';
 import 'antd/dist/antd.css';
 import DeleteIcon from '@material-ui/icons/Delete';

 import {  Col, Row } from "antd";

  import { Drawer, Button } from 'antd';
  import { Collapse } from 'antd';
import NameAnnonce from "./NameAnnonce"
const Panel = Collapse.Panel;


var dateformat = require('dateformat');

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
 
    
  },
});
const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
      color: "rgba(0,0,0,0.65)"
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: "inline-block",
        color: "rgba(0,0,0,0.85)"
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

function PropServiceContreService(props) {
  return <div>       
    <Row>
  <Col span={12}>
    <DescriptionItem   title='Proposition type 'content="Proposition of service against a service "/>
  </Col>
</Row>
   <Row>
    
  <Col span={12}>
    <DescriptionItem title={<i> List of cities where you can offer your service</i>} content={props.passedItem.listVilles}/>{" "}
  </Col>
  <Col span={12}>
    <DescriptionItem title={<i> List of services that you can offer in return </i>} content={ props.passedItem.listServices} />
  </Col>
</Row>
<Row>
  <Col span={12}>
    <DescriptionItem title= {<i> The person ca choose between </i>} content={props.passedItem.optionChoice}/>
  </Col>
  <Col span={12}>
    <DescriptionItem title={<i> The experience attached with the proposition</i>} content={props.passedItem.listExperiences} />
  </Col>
</Row>
<Row>
  <Col span={12}>
    <DescriptionItem
      title={<i>The desired period during which both people want to make the exchange of services        </i>}
      content={'Between  '+ dateformat(props.passedItem.dateDebut , "dd/mm/yyyy ") +' && '+dateformat(props.passedItem.dateFin , "dd/mm/yyyy ")
    }
    />
  </Col>
</Row>
   
<Row>
   
  <Col span={24}>
    <DescriptionItem
      title={<i> Message sent with the proposition        </i>}
      content={props.passedItem.message}
    />
  </Col>
</Row>
 
</div>;
}

function PropServiceContreBesoin(props) {
  return <div>       
  <Row>
<Col span={12}>
  <DescriptionItem   title={<i> Proposition type </i> } content="Proposition of service against a need "/>
</Col>
</Row>
 <Row>
  
<Col span={12}>
  <DescriptionItem title={<i> List of cities where you can offer your service</i>} content={props.passedItem.listVilles}/>{" "}
</Col>
<Col span={12}>
  <DescriptionItem title= {<i>The service you will offer against this need </i>} content={ props.passedItem.listServices} />
</Col>
</Row>
<Row>

<Col span={12}>
  <DescriptionItem title={<i>The experience attached with the proposition </i>} content={props.passedItem.listExperiences} />
</Col>
<Col span={12}>
  <DescriptionItem title={<i>The service you want to have in return </i>} content={props.passedItem.listBesoins} />
</Col>
</Row>
 
<Row>
 <Col span={24}>
  <DescriptionItem
    title={<i>Message sent with the proposition      </i>}
    content={props.passedItem.message}
  />
</Col>
</Row>

</div>;
}

function PropServiceCadeau(props) {
  return <div>       
    <Row>
<Col span={12}>
  <DescriptionItem   title={<i> Proposition type </i> } content="Proposition of gift service against a need "/>
</Col>
</Row>
  
<Row>
<Col span={12}>
  <DescriptionItem title={<i> Number of times the service will be offered</i>} content={ props.passedItem.nbFois}/>
</Col>
 </Row>
<Row>
<Col span={12}>
  <DescriptionItem
    title={<i> The period offered to offer the service
      </i>}
    content={'Between  '+ dateformat(props.passedItem.dateDebut , "dd/mm/yyyy ") +' && '+dateformat(props.passedItem.dateFin , "dd/mm/yyyy ")
  }
  />
</Col>
</Row>
 
<Row>
 
<Col span={24}>
  <DescriptionItem
     title={<i> Message sent with the proposition        </i>}
    content={props.passedItem.message}
  />
</Col>
</Row>


</div>;
}

function PropMontant(props) {
  return <div>       
  <Row>
<Col span={12}>
  <DescriptionItem   title={<i> Proposition type </i> } content="Proposition of an amount of money against a service "/>
</Col>
</Row>
 <Row>
  
<Col span={12}>
  <DescriptionItem title={<i> Amount of money </i>} content={props.passedItem.montantOffert}/>{" "}
</Col>
<Col span={12}>
  <DescriptionItem title={<i> Mode of payment</i>} content={ props.passedItem.typePayement} />
</Col>
</Row>
<Row>
<Col span={12}>
  <DescriptionItem title={<i> Number of time the service wanted to be offered</i>}content={ props.passedItem.nbFois}/>
</Col>
 </Row>
<Row>
<Col span={12}>
  <DescriptionItem
    title={<i> The desired period to receive the service</i>    }
    content={'Between  '+ dateformat(props.passedItem.dateDebut , "dd/mm/yyyy ") +' && '+dateformat(props.passedItem.dateFin , "dd/mm/yyyy ")
  }
  />
</Col>
</Row>
 
<Row>
 
<Col span={24}>
  <DescriptionItem
     title={<i> Message sent with the proposition        </i>}
    content={props.passedItem.message}
  />
</Col>
</Row>

</div>;
}
function Details(props) {
   if (props.passed === 'servicecontreservice') {
    return<PropServiceContreService passedItem={props.passedProposition}/>
  }else if (props.passed === 'servicecontrebesoin')
  {
    return <PropServiceContreBesoin passedItem={props.passedProposition}/>

  }
  else if (props.passed === 'servicecadeau')
  {
    return <PropServiceCadeau passedItem={props.passedProposition}/>

  }
  else if (props.passed === 'montant') {    return<PropMontant passedItem={props.passedProposition}/>
  }
  else return( <h1> {props.passed} </h1>)
}


 
class TablePaginationActions extends React.Component {
   
  
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

let counter = 0;
 
const styles = theme => ({
  root: {
     marginTop: theme.spacing.unit * 3,
     width:'100%'
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class CustomPaginationActionsTable extends React.Component {
  constructor(props ) {
    super(props  );
    
     this.state = {
      propositions:[]
  ,    rowsPerPage: 5,    page: 0,  


    };
    
  }

   

  componentDidMount() {
    axios.get(`http://localhost:51492/api/Proposition/GetAllPropOfUserToUsers/${this.props.passedUser.id}`)
      .then(res => {
        const propositions = res.data;
        this.setState({ propositions });
      })
   }

 

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { propositions, rowsPerPage, page } = this.state;
    const emptyRows = '0'

    return (
      <div> 
            <p
          style={{
            marginTop:'10px',
             fontSize: 20,
            fontFamily: "lucida grande",
            color:'gray'
          }}
        >
          {" "}
          Propositions list :{" "}
        </p>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {propositions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(proposition => {
                return (
                  <TableRow key={proposition.id}>
                  <TableCell> 
                  <IconButton onClick={this.showDrawer}  style={{position: 'relative', }} >
                     <Avatar  style={{    margin: 10,position:'relative',
                     color: '#fff',
                      backgroundColor: blue[300], 
                        }}>
                      <AssignmentIcon  />
                      </Avatar>
                  </IconButton>
                  </TableCell>
                    <TableCell component="th" scope="proposition">
                    <Collapse bordered={false}  >
                 <Panel header={<div>     You have sent this proposition : <b>{ dateformat(proposition.dateProposition , "dd / mm / yyyy, H:MM  ")  } </b> to : <a> <NomPrenom passedValue={proposition.proposedToUserID} />  </a> which is related to the post N°  <a> {proposition.annonceID} </a>  | <i>{proposition.etat} </i>
                               <CircularProgress size={20} className={classes.progress}style={{ color: red[500], marginLeft:'12px' }} thickness={2} />
                               <Button variant="fab"   aria-label="Delete" style ={{marginLeft:'55px'}} className={classes.button}>
        <DeleteIcon />
      </Button>
 
                          </div>} key={proposition.id} >
                          <Details passed={proposition.typeProposition} passedProposition={proposition}/>

                         </Panel>
   </Collapse>
                </TableCell>
                   </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={propositions.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
   

      </div>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);


