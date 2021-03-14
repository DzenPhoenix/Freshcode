import React from 'react';
import Style from './ChosenListItem.module.css';

class ChosenListItem extends React.Component{
    render() {
        return <div className={Style.item} >Name:{this.props.name}, Age:{this.props.age}</div>
    }
}

export default ChosenListItem;