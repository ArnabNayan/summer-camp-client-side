

const HeadingTitle = ({heading}) => {
    return (
        <div className="md:w-1/3 text-center mx-auto">
           <p className="text-pink-600 mb-2 text-3xl border-slate-300 font-bold  uppercase border-y-4 py-4">{heading}</p> 
        </div>
    );
};

export default HeadingTitle;