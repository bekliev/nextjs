import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default class RequesterDetails extends React.Component {
  constructor(props) {
    super(props);

    this.keyLabels = {
      fullName: 'Full Name',
      department: 'Department',
      location: 'Location',
      projectCode: 'Cost Code / Project Code',
      email: 'Email',
      telNo: 'Telephone No.'
    };

    this.state = this.createState();
    // this.textFields = this.createTextFields();
  }

  createState = () => {
    const createdState = {};
    Object.keys(this.keyLabels).forEach(label => (createdState[label] = ''));
    return createdState;
  };

  createTextFields = () =>
    Object.keys(this.keyLabels).map((label, index) => (
      <Grid item xs={4} key={label}>
        <TextField
          key={index}
          autoFocus={false}
          required
          id={label}
          label={this.keyLabels[label]}
          value={this.state[label]}
          onChange={this.handleChange(label)}
          fullWidth
          margin="normal"
        />
      </Grid>
    ));

  handleChange = name => event =>
    this.setState({
      [name]: event.target.value
    });

  render() {
    return (
      <Grid item xs={12}>
        <form>
          <Typography variant="h6">1. Requester Details</Typography>
          {this.createTextFields()}
        </form>
      </Grid>
    );
  }
}
