import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class AddAssignment extends Component {
      constructor(props){
        super (props)
        this.state = {open:false , name: "", dueDate: "" , courseId: 0};
      };

      handleClickOpen = () => {
        this.setState({open:true});
      };

      handleClose = () => {
        this.setState ({open:false});

      };

      handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
      }
      // Save course and close modal form
      handleAdd = () => {
     const assign = {name: this.state.name,
                    dueDate: this.state.dueDate,
                    courseId: this.state.courseId}
     //set state values to new values
      this.props.addAssignment(assign);
      this.handleClose();
   }

   render()  {
     return (
         <div>
           <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
             Add Assignment
           </Button>
           <Dialog open={this.state.open} onClose={this.handleClose}>
               <DialogTitle>Add Assignment</DialogTitle>
               <DialogContent  style={{paddingTop:10}} >
                 <TextField autoFocus fullWidth label="Course Id" name="courseId" onChange={this.handleChange}/>
                 <br/><br/>
                 <TextField fullWidth label="Assignment Name" name="name" onChange={this.handleChange}/>
                 <br/><br/>
                 <TextField fullWidth label="Assignment Due Date" name="dueDate" onChange={this.handleChange}/>
               </DialogContent>
               <DialogActions>
                 <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                 <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
               </DialogActions>
             </Dialog>
         </div>
     );
   }
}

// required property:  addCourse is a function to call to perform the Add action
AddAssignment.propTypes = {
 addAssignment : PropTypes.func.isRequired
}

export default AddAssignment;
