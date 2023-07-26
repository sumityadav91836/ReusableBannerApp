import './index.css'

const BannerSection = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails

  return (
    <li className="list-type">
      <div className="card-container">
        <div className={className}>
          <div className="text-container">
            <h1 className="header-text">{headerText}</h1>
            <p className="description">{description}</p>
            <button className="btn">Show More</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BannerSection
