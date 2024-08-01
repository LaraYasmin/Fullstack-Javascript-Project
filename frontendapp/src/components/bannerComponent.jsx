import undraw from '../assets/undraw_cloud_hosting_7xb1.svg';

const BannerComponent = () => {
    return (
      <div className="flex min-h-screen">
        <div className="flex bg-black w-1/2 justify-center items-center">
          <img src={undraw} alt="image_cloud" className="object-cover w-1/2"/>
        </div>
      </div>
    )
}

export default BannerComponent;