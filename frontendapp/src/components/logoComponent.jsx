import name from '../assets/name.svg'

const LogoComponent = () => {
    return (
        <div className='flex w-1/2 justify-end bg-slate-100'>
            <div className="flex justify-center">
                <img src={name} alt="image_cloud" className="object-cover"/>
            </div>
        </div>
    )
}

export default LogoComponent;