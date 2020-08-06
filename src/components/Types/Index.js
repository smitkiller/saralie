import React,{PropTypes} from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos'
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import _ from 'lodash';


const state = {
    showCheckboxes: false
  };
const Types = ({types,onReloadTypes
}) => (
  <div>
    <div className="btn_new">
      <FlatButton
        onClick={() => onReloadTypes()}
        label="Reload"
      />
      <Link to={{ pathname: '/types/new' }}><FlatButton icon={<AddIcon/>} /></Link>
    </div>
    <hr />
    <Table>
     <TableHeader
      displaySelectAll={state.showCheckboxes}
      adjustForCheckbox={state.showCheckboxes}
     >
       <TableRow>
       <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={state.showCheckboxes}
      >
        {
          _.map(types,(data,key) => (
            <TableRow key={key}>
              <TableRowColumn>{data.category}</TableRowColumn>
              <TableRowColumn>{data.description}</TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/types/${key}` }}><FlatButton label="Show" secondary={true} /></Link>
              </TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/types/edit/${key}` }}><FlatButton icon={<EditIcon/>}  /></Link>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
)

Types.propTypes = {
  onReloadTypes: PropTypes.func.isRequired
}

export default Types;
