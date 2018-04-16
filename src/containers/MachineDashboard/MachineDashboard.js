/**
 * Main Container component which handles the state of the vending machines while adding and deleting
 */
import React, {Component} from 'react';
import CreateVendingMachine from '../../containers/CreateVendingMachine/CreateVendingMachine';
import Navigation from '../../components/Navigation/Navigation';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-vmmgmt';
import VendingMachines from '../../components/VendingMachines/VendingMachines';
import Spinner from '../../components/UI/Spinner/Spinner';

class MachineDashboard extends Component {
    state = {
        creatingVendingMachine: false,
        vendingMachines: [],
        loading: false
    };

    /**
     * Make the backend call to get the data
     * TODO Need to give a visual indication to the user in case of errors
     */
    componentDidMount() {
        this.setState({loading: true});
        axios.get('/vending_machines')
            .then(response => {
                this.setState({
                    vendingMachines: response.data.data,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }

    /**
     * Function called when the user initiates the create vending machine flow
     */
    onCreateVmStartHandler = () => {
        this.setState({creatingVendingMachine: true});
    };

    /**
     * Function called when the user cancels the creation of vending machine by clicking on the backdrop
     */
    onCancelCreateVmHandler = () => {
        this.setState({creatingVendingMachine: false});
    };

    /**
     * Function which gets called once the user submits the create vending machine form
     *
     * @param vendingMachine the vending machine details to be added to the db
     * TODO Need to give a visual indication to the user in case of errors
     */
    onCreateVmCompleteHandler = (vendingMachine) => {
        const updatedMachines = [...this.state.vendingMachines];
        axios.post( '/vending_machines', vendingMachine )
            .then( response => {
                updatedMachines.push(response.data.data);
                this.setState({vendingMachines: [...updatedMachines]});

            })
            .catch( error => {
                console.log(error);
                this.setState(this.baseState);
            });
        this.setState({creatingVendingMachine: false});
    };

    /**
     * Function which gets called when the user deletes a vending machine
     *
     * @param id ID of the vending machine to delete
     */
    onDeleteVmHandler = (id) => {
        this.setState({loading: true});
        const deletedMachineIndex = this.state.vendingMachines.findIndex(vm => vm.id === id);
        const updatedMachines = [...this.state.vendingMachines];
        axios.delete('/vending_machines/' + id)
            .then(response => {
                updatedMachines.splice(deletedMachineIndex, 1);
                this.setState({
                    vendingMachines: [...updatedMachines],
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    };

    render() {
        let vendingMachines = null;
        if (this.state.vendingMachines.length !== 0) {
            vendingMachines =
                <VendingMachines vendingMachines={this.state.vendingMachines} clicked={this.onDeleteVmHandler}/>
        } else {
            vendingMachines = <p>No Vending Machines exist, Please create one using the dashboard</p>
        }

        if (this.state.loading) {
            vendingMachines = <Spinner/>;
        }

        return (
            <div className="App">
                <Navigation clicked={() => this.onCreateVmStartHandler()}/>
                <Modal
                    show={this.state.creatingVendingMachine}
                    modalClosed={this.onCancelCreateVmHandler}>
                    <CreateVendingMachine onCreateVM={this.onCreateVmCompleteHandler}/>
                </Modal>
                {vendingMachines}
            </div>
        );
    }
}

export default MachineDashboard;
