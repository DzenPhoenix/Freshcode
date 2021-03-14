import React from 'react';
import Style from './ListItem.module.css';

class ListItem extends React.Component {
    render() {
        return <div className={Style.item} >Name:{this.props.name}, Age:{this.props.age}</div>
    }
}

export default ListItem;