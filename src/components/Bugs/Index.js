import React,{Component} from 'react';
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


class Bugs extends Component{
	render(){
		const {bugs}=this.props;
		return(
	<div>
    <div className="btn_new">
      <Link to={{ pathname: '/bugs/new' }}><FlatButton icon={<AddIcon/>} /></Link>
    </div>
    <hr />
    <Table>
     <TableHeader
      displaySelectAll={state.showCheckboxes}
      adjustForCheckbox={state.showCheckboxes}
     >
       <TableRow>
       <TableHeaderColumn>Issue</TableHeaderColumn>
        <TableHeaderColumn>Detail</TableHeaderColumn>
        <TableHeaderColumn>Solution</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={state.showCheckboxes}
      >
     {/*(console.log('xxxxx\==<>',types['-LlQNJb42GsSMHZ2kYbZ']))*/}
        {

          _.map(bugs,(data,key) => (

            <TableRow key={key}>
              <TableRowColumn>{data.issue}</TableRowColumn>
              <TableRowColumn>{data.detail}</TableRowColumn>
              <TableRowColumn>{data.solution}</TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/bugs/edit/${key}` }}><FlatButton icon={<EditIcon/>}  /></Link>
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
	}
}

export default Bugs;