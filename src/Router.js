import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
        return(
            <Router>
                <Scene key='root' hideNavBar>
                    <Scene key="Login" initial >
                    <Scene
                            key="LoginForm"
                            component={LoginForm}
                            initial
                            hideNavBar={false}
                            title="Login"
                            titleStyle={styles.titleStyle}
                        />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            key="EmployeeList"
                            component={EmployeeList}
                            initial
                            hideNavBar={false}
                            title="Employee List"
                            titleStyle={styles.titleStyle}
                            rightTitle="ADD"
                            onRight={() => Actions.EmployeeCreate() }
                            rightButtonTextStyle={styles.buttonTitleStyle}
                        />
                        <Scene
                            key="EmployeeCreate"
                            component={EmployeeCreate}
                            title="Add Employee"
                            hideNavBar={false}
                            titleStyle={styles.titleStyle}
                        />
                        <Scene
                            key="employeeEdit"
                            component={EmployeeEdit}
                            title="Edit"
                            hideNavBar={false}
                            titleStyle={styles.titleStyle}
                        />
                    </Scene>
                </Scene>
            </Router>
        );
}

const styles = {
    titleStyle: {
        flex: 1,
        fontSize: 18
    },
    buttonTitleStyle: {
        paddingLeft: 5
    }
}

export default RouterComponent;
