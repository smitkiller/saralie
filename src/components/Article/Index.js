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

const Article = ({articles,types,onReloadArticles
}) => (
  <div>
    <div className="btn_new">
      <FlatButton
        onClick={() => onReloadArticles()}
        label="Reload"
      />
      <Link to={{ pathname: '/articles/new' }}><FlatButton icon={<AddIcon/>} /></Link>
    </div>
    <hr />
    <Table>
     <TableHeader
      displaySelectAll={state.showCheckboxes}
      adjustForCheckbox={state.showCheckboxes}
     >
       <TableRow>
       <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Content</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={state.showCheckboxes}
      >
     {/*(console.log('xxxxx\==<>',types['-LlQNJb42GsSMHZ2kYbZ']))*/}
        {

          _.map(articles,(data,key) => (

            <TableRow key={key}>
              <TableRowColumn>{data.title}</TableRowColumn>
              <TableRowColumn>{types[data.category].category}</TableRowColumn>
              <TableRowColumn>{data.content}</TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/articles/${key}` }}><FlatButton label="Show" secondary={true} /></Link>
              </TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/articles/edit/${key}` }}><FlatButton icon={<EditIcon/>}  /></Link>
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

Article.propTypes = {
  onReloadArticles: PropTypes.func.isRequired
}

export default Article;