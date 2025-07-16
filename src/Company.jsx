import React from 'react';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import logo5 from './assets/logo5.png';
function Company(){
const logos=[{id:1,src:logo1, alt:"logo"},
{id:2,src:logo2, alt:"logo"},
{id:3,src:logo3, alt:"logo"},
{id:4,src:logo4, alt:"logo"},
{id:5,src:logo5, alt:"logo"},

 ];
 return(
    <section  data-aos="fade-up"className='bg-gray-100 py-10'>
        <div className='max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-9'>
            {logos.map((logo)=>(
<img key={logo.id} src={logo.src} alt={logo.alt} className='h-19 w-20 object-contain grayscale hover:grayscale-0 transition duration-300'/>
            ))}
            </div>    
            </section>
 )
}
export default Company;
