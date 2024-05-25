import bistro from '../../../assets/home/chef-service.jpg'
import './Bistro.css';

const BistroBoss = () => {
    return (
        <div className={` bistro bg-[url${bistro}] `}>
            <div className='w-2/3 h-2/3 bg-white flex items-center justify-center text-center '>
            <div className='md:px-16'>
            <h2 className=' text-center my-auto text-6xl mb-4 '>
              Bistro Boss
              </h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
            </div>
        </div>
    );
};

export default BistroBoss;