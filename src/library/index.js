import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {TextField,SelectField} from 'redux-form-material-ui';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import ReactMDE from 'redux-forms-markdown-editor';
import ReactMarkdown from 'react-markdown';
import {Dialog,FlatButton} from 'material-ui';
import {ListItem} from 'material-ui/List';
import Clear from 'material-ui/svg-icons/content/clear';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import {Card, CardHeader,CardTitle, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Attachmoney from 'material-ui/svg-icons/editor/attach-money';

import {
	Table, 
	TableBody, 
	TableHeader, 
	TableHeaderColumn, 
	TableRow, 
	TableRowColumn} from 'material-ui/Table';

export const mAttachmoney = Attachmoney;
export const mDrawer = Drawer;
export const mAppBar = AppBar;
export const mbrowserHistory = browserHistory;
export const mCardTitle = CardTitle;
export const mCardText= CardText;
export const mCardHeader = CardHeader;
export const mCard = Card;
export const mDeleteIcon = DeleteIcon;
export const mAvatar = Avatar;
export const mClear = Clear;
export const mListItem = ListItem;
export const mActionAssignment = ActionAssignment;
export const mFlatButton = FlatButton;
export const mDialog = Dialog;
export const mAddIcon = AddIcon;
export const mEditIcon = EditIcon;
export const mLink = Link;
export const mTextField = TextField;
export const mSelectField = SelectField;
export const mMenuItem = MenuItem;
export const mTable = Table;
export const mTableBody = TableBody;
export const mTableHeader = TableHeader;
export const mTableHeaderColumn = TableHeaderColumn;
export const mTableRow = TableRow;
export const mTableRowColumn = TableRowColumn;
export const mReactMarkdown = ReactMarkdown;
export const mconnect = connect;
export const mField = Field;
export const mreduxForm = reduxForm;
export const mReactMDE = ReactMDE;

export const m_ = _;

