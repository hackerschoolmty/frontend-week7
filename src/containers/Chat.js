import Chat from '../components/chat/Chat.react';
import { connect } from 'react-redux';
import { chatActions } from '../redux/actions';
import { authActions } from '../redux/actions';

const allActions = Object.assign({}, chatActions, authActions)

const mapStateToProps = state => {
  const messages = state.getIn(['chat', 'messages'])
                        .valueSeq()
                        .sortBy(message => message.get('timestamp'));
  return {
    displayName: state.getIn(['user', 'displayName']),
    messages,
  };
};

export default connect(mapStateToProps, allActions)(Chat);
