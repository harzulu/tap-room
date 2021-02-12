import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm.js';
import KegDetail from './KegDetail.js';

export default class BarController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      currentKeg: null,
      currentViewPage: false
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({currentKeg: selectedKeg})
  }

  handleNewKegCreation = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentViewPage: false
    })
  }

  handleClick = () => {
    this.setState({currentViewPage: !this.state.currentViewPage});
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.currentViewPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleNewKegCreation}/>
      buttonText = "Return to keg list";
    } else if (this.state.currentKeg != null) {
      currentVisibleState = <KegDetail keg={this.state.currentKeg} />
      buttonText = "Return to keg list";
    } else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add new keg";
    } 

    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}