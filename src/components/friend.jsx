import "../styles/application.css";

// components are there_______
import FriendCard from './friend-item.jsx'
const friends = () => {
  return (
    <>
      <section className="friend-section">
        <div className="friend-container">
          <div className="friend-title">
            <div className="friend-visit friend-t">
              <p>Friends</p>
            </div>
            <div className="friend-refresh friend-t">
              <p>Refresh</p>
            </div>
          </div>
          <div className="friend-hero">
            <div className="friend-component f1">
              <FriendCard />
            </div>
            <div className="friend-component f2">
              <FriendCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default friends;
