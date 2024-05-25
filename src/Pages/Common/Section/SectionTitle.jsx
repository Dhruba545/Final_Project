
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-[600px] py-8">
              <p className="text-yellow-600">---{heading}---</p>
              <h3 className="text-4xl uppercase border-y-4 py-2  ">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;