import styled from 'styled-components'
import { useAuth } from '../MyContext'


const Avatar = styled.div`
  background-image: URL(${({ mediaPath, icon }) => mediaPath + icon});
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1
  `;
  
  const FeedbackCard = ({ icon, name, info, text }) => {
    const { mediaPath } = useAuth()
    
  return (
    <div
      className='col-md-5 mb-5'
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      style={{ position: "relative", minHeight: "360px" }}>
      <Avatar className='rounded-circle' icon={icon} mediaPath={mediaPath}/>
      <div className='bg-dark text-light text-center rounded pb-3'
        style={{
          width: "95%",
          position: "absolute",
          top: "85px"
        }}>
        <h4 className='pt-5 pb-3' style={{ letterSpacing: "0.15rem" }}>{name}</h4>
        <p className='py-1'>{info}</p>
        <div className='pt-1 pb-2'>
          {text.map((item, i) => <p key={i} className='mb-1'>{item}</p>)}
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard