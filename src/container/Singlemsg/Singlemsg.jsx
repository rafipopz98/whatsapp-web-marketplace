
const Singlemsg = () => {
    const clicked = (event) => {
        event.currentTarget.classList.toggle("active");
      };
  return (
    <div>
        <div className="single_block active unread" onClick={clicked}>
          <div className="imgbox">
            <img
              className="coverImg"
              src="https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png"
              alt="userImg"
            />
          </div>
          <div className="user_details">
            <div className="user_name">
              <h4>lolol</h4>
              <p className="time">20:23</p>
            </div>
            <div className="message_small">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                earum!
              </p>
              <b>1</b>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Singlemsg