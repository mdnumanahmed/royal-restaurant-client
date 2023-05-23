

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center mb-8">
            <p className="text-orange-500 my-2">---- {subHeading} ----</p>
            <h2 className="text-3xl uppercase border-y-4 py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;