import React,{PropTypes} from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import _ from 'lodash';

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