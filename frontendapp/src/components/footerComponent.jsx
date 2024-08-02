import React from "react";
import win from "../assets/win.svg";
import logoW from "../assets/nameW.svg";

const FooterComponent = () => {
    return (
        <div className="footer w-full bg-black h-auto mt-4 py-10">
            <div className='flex flex-col md:flex-row w-10/12 mx-auto gap-8'>
                <div className='flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left text-white'>
                    <img src={logoW} alt="image_name" className="w-5/10 h-5 mb-4"/>
                    <p className='text-sm mt-4'>
                        "MarkedUp is driven by a fervent passion for crafting efficient solutions that redefine standards. 
                        Our relentless pursuit of innovation fuels every aspect of our work, ensuring we deliver cutting-edge 
                        solutions that exceed expectations. With a focus on excellence, we continuously strive to push boundaries 
                        and elevate the industry. At MarkedUp, we don't just create products; we pioneer transformative 
                        experiences that inspire and empower."
                    </p>
                </div>

                <div className='flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left text-white md:ml-32'>
                    <p className="text-sm font-semibold mt-9 mb-9">Modules</p>
                    <p className='text-sm'>
                        Internal Communication
                        <br />
                        Development
                        <br />
                        Research
                        <br />
                        Training
                        <br />
                        Advocacy Marketing
                    </p>
                </div>

                <div className='flex flex-col items-center md:items-start md:w-1/6 text-center md:text-left text-white'>
                    <p className="text-sm font-semibold mt-9 mb-9">Navigation</p>
                    <p className='text-sm'>
                        About Us
                        <br />
                        AI
                        <br />
                        Price
                        <br />
                        Blog
                        <br />
                        Support
                        <br />
                        Contact
                    </p>
                </div>

                <div className='flex flex-col items-center md:items-start md:w-1/3 mt-9 text-center md:text-left text-white'>
                    <img src={win} alt="image_win" className="w-64 ml-10 md:w-96"/>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;