const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message.type === 'add') {
    return (
      <div className="notification">
        Added {message.content}
      </div>
    );
  }

  if (message.type === 'error') {
    return (
      <div className="error">
        Information of {message.content} has already been removed from server
      </div>
    );
  }
};

export default Notification;
