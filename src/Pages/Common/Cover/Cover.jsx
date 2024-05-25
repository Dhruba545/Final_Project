import { Parallax } from 'react-parallax';
const cover = ({img , title , des }) => {
    return ( <Parallax
        blur={{ min: -55, max: 55 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-100}
    >
       
       <div className="hero h-[650px]" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{des}.</p>
          </div>
        </div>
      </div>
    </Parallax>
    );
};

export default cover;