import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

import { closeModal } from "../actions/modal";

export class AlertModal extends Component {
  render() {
    const { modalConfiguration } = this.props;

    const defaultProps = {
      defaultOpen: true,
      closeIcon: true,
      onClose: this.props.closeModal
    };

    let renderedComponent;

    if (modalConfiguration) {
      const { modalProps = {} } = modalConfiguration;
      renderedComponent = <Modal {...Object.assign({}, modalProps, defaultProps)} />;
    }

    return <span>{renderedComponent} </span>;
  }
}

function mapStateToProps(state) {
  return { modalConfiguration: state.modals };
}

export default connect(mapStateToProps, { closeModal })(AlertModal);