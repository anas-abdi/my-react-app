function Notification({ hasNewMessages }) {
  return (
    <div>
      <h2>Inbox</h2>

      {hasNewMessages && <p>You have new messages!</p>}
    </div>
  );
}
export default   Notification;
          