import React, { Component } from 'react'
import { Icon, Label, Menu, Table, Form ,Dropdown,Container, Header, Button} from 'semantic-ui-react'

import { connect } from 'react-redux'
import { DatePick } from './DatePick'



import AlertModal from "./components/AlertModal";
import { openModal } from "./actions/modal";
class MainTable extends Component {
   
  constructor(props) {
    super(props);
  
  this.state = {
    
    value: '',
    items:[],
    rows: [{
      Age: '',
      name: '',
      date: '',
      
      
    }]
  
  
  };
  }
  
  
  handleValue = (e, { value}) => {
    // const { name, value } = result || event.target;
    this.setState({ value: value });
  };

  handleUpdate(i, event) {
    var items = this.state.rows;
  
    items[i] = event.target.value;
  
    this.setState({
      rows: items
    });
  }

handleChange = idx => e => {
  const { name, value } = e.target;
  const rows = [...this.state.rows];
  rows[idx] = {
    age: value,
    name: value,
    
  };
  this.setState({
    rows
  });
  console.log([rows])
};
handleAddRow = () => {
  const item = {
    name: "",
    age: "",
    
    date:''
  };
  this.setState({
    rows: [...this.state.rows, item]
  });
};
handleRemoveRow = () => {
  this.setState({
    rows: this.state.rows.slice(0, -1)
  });
};
handleRemoveSpecificRow = (idx) => () => {
  const rows = [...this.state.rows]
  rows.splice(idx, 1)
  this.setState({ rows })
}
   

  render() {
    const { value } = this.state;
    var context = this;
    
   



        return (
            <React.Fragment>
                <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Age</Table.HeaderCell>
                  <Table.HeaderCell>DOJ</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

        <Table.Body>
              {this.state.rows.map((item,idx) => (
              <Table.Row key={idx}>
              
                  <Table.Cell>
                    
            <Label>
                      <Form.Field inline>
          <input  type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control"/>
      
                      </Form.Field>
                    </Label>
        </Table.Cell>
                  <Table.Cell>
                  <Label>
                      <Form.Field inline>
          <input type="number"
                          name="Age"
                          value={this.state.rows[idx].age}
                          onChange={this.handleChange(idx)}
                          className="form-control" />
      
                      </Form.Field>
                    </Label>
                 
        </Table.Cell>
                  <Table.Cell>
            
            <DatePick />
            </Table.Cell>
           
                 
                  <Table.Cell>
                    <Dropdown placeholder='Skills' fluid
                       multiple selection
                      options={[
                        { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
        ]}
                      onChange={this.handleChange}  />
                  </Table.Cell>
            <Table.Cell>
                    
                    <Button color='green' onClick={this.handleChange(idx)} > Update</Button>
                 
        
        <AlertModal />
        
        <Button color='red' onClick={() => this.props.openModal({
              header: "Are You Sure you want to delete the Row?",
          content: (<Button color='red' onClick={this.handleRemoveRow(idx)}> Yes</Button>)
            })}>
          Remove
        </Button>
      
                  </Table.Cell>
              </Table.Row>
            ))}
           

            
      
     
            <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
                
    </Table.Body>

   
            </Table>
           
</React.Fragment>
        )
    }
}
export default connect(null, {openModal})( MainTable)