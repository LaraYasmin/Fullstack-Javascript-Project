import undraw from '../assets/undraw_cloud_hosting_7xb1.svg';

const BannerComponent = () => {
    return (
      <div className="flex w-full h-full bg-black justify-center items-center">
        <img src={undraw} alt="image_cloud" className="object-cover w-1/2"/>
      </div>
    )
}

export default BannerComponent;