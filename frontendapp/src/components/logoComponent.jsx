import name from '../assets/name.svg'
import line from '../assets/line.svg'

const LogoComponent = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <div className="flex flex-col items-center">
                <p>Welcome to</p>
                <img src={name} alt="image_cloud" className="w-100 h-auto"/>
                <p>Building solutions for your company</p>
                <img src={line} alt="image_line" className='w-100 mt-8 h-auto'/>
            </div>
        </div>
    )
}

export default LogoComponent;