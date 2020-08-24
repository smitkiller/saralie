import React,{PropTypes} from 'react';
import {
  mFlatButton as FlatButton,
  mAddIcon as AddIcon,
  mEditIcon as EditIcon,
  mLink as Link,
  mTable as Table, 
  mTableBody as TableBody, 
  mTableHeader as TableHeader, 
  mTableHeaderColumn as TableHeaderColumn, 
  mTableRow as TableRow, 
  mTableRowColumn as TableRowColumn,
  m_ as _
} from '../../library';


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
