import React from 'react';
import ListItem from '../listItem/ListItem.jsx'
import Style from './UserList.module.css';

import ChosenListItem from '../chosenListItem/ChosenListItem.jsx';

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users:this.props.dbUsers,
        }
    }

    render() {
        let res=this.state.users.map(
            (user)=>{
                if(this.state.users.isChecked){
                    return <ChosenListItem className={Style.list} key={user.id} name={user.name} age={user.age}/>;
                }
                else{
                    return <ListItem className={Style.list} key={user.id} name={user.name} age={user.age}/>;
                }
                
            }
        );

        return <div className={Style.list}>{res}</div>;
    }
}

export default UserList;