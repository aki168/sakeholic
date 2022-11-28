import { NavLink } from 'react-router-dom'

const Footer = () => {

  const NavItems = [
    {
      name: "關於小酌",
      path: "/about"
    },
    {
      name: "產地查詢",
      path: "/areaSearch"
    },
    {
      name: "熱門排名",
      path: "/ranking"
    },
    {
      name: "酒品總覽",
      path: "/search"
    },
  ]

  return (
    <footer className='bg-dark text-white pt-3 pb-5'>
      <div className='container text-center 
      d-flex flex-column 
      flex-md-row justify-content-md-around
      pb-5'>
        <div className='pt-5'>
          <NavLink to="/" className='text-white d-md-none'>
            <h2 className='title-font'>SAKEHOLIC BOOK</h2>
            <p className='fs-4 fw-light'>小酌圖鑑。</p>
          </NavLink>
          <NavLink to="/" className='text-white d-none d-md-block text-start'>
            <h2 className='title-font'>SAKEHOLIC <br /> BOOK</h2>
            <p className='fs-4 fw-light'>小酌圖鑑。</p>
          </NavLink>
        </div>

        <div className='pt-4'>
          <h2 className='title-font'>SITEMAP</h2>
          <ul className='d-flex flex-column gap-3'>

            {NavItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className='text-white'>
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div className='py-4'>
        <h2 className='title-font d-none d-md-block text-start mb-3'>COPYRIGHT</h2>
        <p className='d-none d-md-block text-start fw-lighter'>
          ©2022 SAKEHOLIC BOOK<br />
          BY AKI CHENG<br />
          All rights reserved.
        </p>
        <p className='fw-lighter d-md-none'>©2022 SAKEHOLIC BOOK All rights reserved.</p>
      </div>
    </div>
    </footer >
  )
}

export default Footer